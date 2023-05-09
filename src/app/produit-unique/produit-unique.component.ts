import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { ICatalogue } from '../interfaces/icatalogue';
import { CartService } from '../shared/services/cart.service';
import { LocalstorageService } from '../shared/services/localstorage.service';
import { ProduitsService } from '../shared/services/produits.service';
import { ISlider } from '../interfaces/islider';
import { SliderService } from '../shared/services/slider.service';

@Component({
  selector: 'app-produit-unique',
  templateUrl: './produit-unique.component.html',
  styleUrls: ['./produit-unique.component.scss'],
  providers: [MessageService]
})
export class ProduitUniqueComponent {

  @ViewChild('container') containerRef!: ElementRef;
  @ViewChild('imageWrapper') imageWrapperRef!: ElementRef;

  public faArrowLeft = faArrowLeft;
  public sliderImageSrc: any = this._sliderImage.sliderImagesUnique;

  public arrowRight: any = faCaretRight;
  public arrowLeft: any = faCaretLeft;
  public catalogue: ICatalogue[] = this._produits.catalogue;
  public idProductToDisplay: any;
  public currentProducToDisplay: any;
  public tailleSelected: string = "";
  public isTailleSelected: boolean = true;
  public displayTaille: boolean = true;
  public quantity!: any;
  public quantitySelected: number = 1;
  public numbersArticle: number[] = [];
  public littleNavigation: string = "";
  public currentImagesToDisplay!: any;
  public currentImage: number = 0;

  private isMouseDown = false;
  private startX!: number;
  private scrollLeft!: number;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  // public produits!: ICatalogue[];

  constructor(
    private _produits: ProduitsService,
    private _cart: CartService,
    private _router: Router,
    private _ar: ActivatedRoute,
    private _storage: LocalstorageService,
    private _messageService: MessageService,
    private _sliderImage: SliderService


  ) { }

  ngOnInit(): void {
    this.setNumbersArticule();
    this.idProductToDisplay = this._ar.snapshot.params['id'];
    this.getOneProduct();
    this.littleNavigation = this._router.url;
  }

  public getOneProduct() {
    this.currentProducToDisplay = this.catalogue[this.idProductToDisplay - 1];
    this.sliderImageSrc.forEach((element: any) => {
      if (element.Id == this.idProductToDisplay) {
        this.currentImagesToDisplay = element;
        console.log('this.currentImagesToDisplay', this.currentImagesToDisplay);

      }
    });

    this.checkTypeProduct();
  }

  setNumbersArticule() {
    for (let i = 1; i <= 25; i++) {
      this.numbersArticle.push(i);
    }
  }

  public checkTypeProduct() {
    if (this.currentProducToDisplay.Type != 1) {
      this.displayTaille = false
    }
  }

  public addItemToStorage() {
    if (this.tailleSelected.length <= 0 && this.currentProducToDisplay.Type == 1) {
      this.isTailleSelected = false;
      this._messageService.add({ severity: 'error', summary: 'Echec', detail: 'Veuillez choisir une taille' });
    }

    else {
      const products = this._storage.getProduits();
      const existingItemIndex = products.findIndex((item: any) => item.Id === this.currentProducToDisplay.Id && item.Taille[0] === this.tailleSelected)
      if (existingItemIndex !== -1) {
        products[existingItemIndex].Quantity += this.quantitySelected;
        this._storage.updateProducts(products);
      }
      else {
        this._storage.addProduit({
          Id: this.currentProducToDisplay.Id,
          Title: this.currentProducToDisplay.Title,
          Categorie: this.currentProducToDisplay.Categorie,
          Price: this.currentProducToDisplay.Price,
          Quantity: this.quantitySelected,
          Taille: [this.tailleSelected],
          Type: this.currentProducToDisplay.Type,
          Image: this.currentProducToDisplay.Image,
          ImageCheckout: this.currentProducToDisplay.ImageCheckout,
          SecImage: this.currentProducToDisplay.SecImage,
          Description: this.currentProducToDisplay.Description
        });
        this._messageService.add({ severity: 'success', summary: 'Succès', detail: 'Produit ajouté dans le shop' });
        this._storage.getProduitsCount();


      }

    }
  }

  public setStatus() {
    this._cart.setDisplayable(true);
    this._cart.setProduits(this._storage.getProduits())
    this._storage.getProduitsCount();

  }

  public tailleSelectedStyle(taille: string) {
    this.tailleSelected = taille;
    this.isTailleSelected = true;
  }

  public setImage(id: number) {

    this.currentImage = id;
  }

  public imageByArrow(whatArrow: string) {
    if (whatArrow == 'before' && this.currentImage !== 0) {
      this.currentImage = this.currentImage - 1;
    }
    if (whatArrow == 'next' && this.currentImage < (this.currentImagesToDisplay.PreviewImageSrc.length - 1)) {
      this.currentImage = this.currentImage + 1;
      console.log(this.currentImagesToDisplay.PreviewImageSrc.length - 1);


    }
  }

  onMouseDown(event: MouseEvent) {
    this.isMouseDown = true;
    this.startX = event.pageX - this.containerRef.nativeElement.offsetLeft;
    this.scrollLeft = this.imageWrapperRef.nativeElement.scrollLeft;
  }

  onMouseLeave() {
    this.isMouseDown = false;
  }

  onMouseUp() {
    this.isMouseDown = false;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isMouseDown) return;
    event.preventDefault();
    const x = event.pageX - this.containerRef.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 1; // ajuste la vitesse de défilement
    this.imageWrapperRef.nativeElement.scrollLeft = this.scrollLeft - walk;
  }


  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].pageX - this.containerRef.nativeElement.offsetLeft;
    this.scrollLeft = this.imageWrapperRef.nativeElement.scrollLeft;
  }

  onTouchMove(event: TouchEvent) {
    const x = event.touches[0].pageX - this.containerRef.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 3; // ajuste la vitesse de défilement
    this.imageWrapperRef.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  onTouchEnd() {
    // Logique pour le toucher
  }

  @HostListener('window:touchend')
  onGlobalTouchEnd() {
    this.isMouseDown = false;
  }

  @HostListener('window:mouseup')
  onGlobalMouseUp() {
    this.isMouseDown = false;
  }
}
