import { Mascota } from './mascota';
import Swal from 'sweetalert2';
import { config } from 'process';

export class OptionsForms {

//  NRO_CHIP = 0, ESPECIE = 1, COLOR = 2, SEXO = 3, EDAD = 4, TAMAÑO = 5, ESTADO = 6

    private  nroChipTest = new RegExp(/^[a-zA-Z0-9\_\-]{1,}$/);   // Letras, numeros, guion y guion_bajo
    // private static especieTest = new RegExp(/^[a-zA-ZÀ-ÿ\s]{3,}$/);   // Letras y espacios, pueden llevar acentos
    private  colorTest = new RegExp(/^[a-zA-ZÀ-ÿ\s]{3,}$/);
    // private  edadTest = new RegExp(/^[0-3]{1,}$/);   // Numeros
    private  strings = new Array('nroChip', 'color', 'edad', 'tamano');
    private valido;

     validateAll(nroInicio: number, nroCiclo: number, mascota: Mascota): boolean {
        for (let i = nroInicio; i < nroCiclo; i++){
            this.validate(this.strings[i], mascota);
            if (!this.valido) {
                break;
            }
        }
        return this.valido;
    }

     validate(texto: string, mascota: Mascota) {
         switch (texto) {
             case 'nroChip':
                 if (this.nroChipTest.test(mascota.nroChip) && Boolean(mascota.nroChip)) {
                     this.configCase(texto, true);
                     this.valido = true;
                }else{
                    this.configCase(texto, false);
                    this.valido = false;
                }
                 break;
            case 'color':
                if (this.colorTest.test(mascota.color) && Boolean(mascota.color)) {
                    this.configCase(texto, true);
                    this.valido = true;
                }else{
                    this.configCase(texto, false);
                    this.valido = false;
                }
                break;
            case 'edad':
                if (Boolean(mascota.edad)) {
                    this.configCase(texto, true);
                    this.valido = true;
                }else {
                    this.configCase(texto, false);
                    this.valido = false;
                }
                break;
            case 'tamano':
                if (mascota.tamano !== 'Elija') {
                    this.configCase(texto, true);
                    this.valido = true;
                }else{
                    this.configCase(texto, false);
                    this.valido = false;
                }
                break;
        }
    }

    configCase(text: string, isValido: boolean) {
        if (isValido) {
            document.getElementById('barra-' + text).classList.remove('barra-error');
            document.getElementById('barra-' + text).classList.add('barra');
            document.querySelector('.grupo .p-' + text).classList.remove('p-active');
        }else {
            document.getElementById('barra-' + text).classList.add('barra-error');
            document.getElementById('barra-' + text).classList.remove('barra');
            document.querySelector('.grupo .p-' + text).classList.add('p-active');
        }
    }

     throwMessageInfo(Tittle: string, Text: string): void {
        Swal.fire({
            title: Tittle,
            text: Text,
            // html:
            icon: 'info',
            // confirmButtonText:
            // footer: html o texto
            // width: '45%',
            padding: '1rem',
            // background: '#000',
            // grow:
            // backdrop:
            timer: 2000,
            timerProgressBar: true,
            toast: true,
            position: 'top',
            // allowOutsideClick: false,
            // allowEscapeKey: false,
            // allowEnterKey: false,
            // stopKeydownPropagation: false,

            // input:
            // inputPlaceholder:
            // inputValue:
            // inputOptions: {
         //       mexico: 'mexico',
           // },

            // customClass: {
            // 	container:
            // 	popup:
            // 	header:
            // 	title:
            // 	closeButton:
            // 	icon:
            // 	image:
            // 	content:
            // 	input:
            // 	actions:
            // 	confirmButton:
            // 	cancelButton:
            // 	footer:
            // },

            showConfirmButton: false,
            // confirmButtonColor: '#ff00ff80',
            // confirmButtonAriaLabel:

            // showCancelButton:
            // cancelButtonText:
            // cancelButtonColor:
            // cancelButtonAriaLabel:

            // buttonsStyling:
            // showCloseButton:
            // closeButtonAriaLabel:


            // imageUrl:
            // imageWidth:
            // imageHeight:
            // imageAlt:
        });
    }

     throwMessageSuccess(Tittle: string, Text: string): void {
        Swal.fire({
            title: Tittle,
            text: Text,
            // html:
            icon: 'success',
            // confirmButtonText:
            // footer: html o texto
            // width: '30%',
            // padding: '1rem',
            // background: '#000',
            // grow:
            // backdrop:
            timer: 1500,
            timerProgressBar: false,
            // toast: true,
            position: 'bottom',
            // allowOutsideClick: false,
            // allowEscapeKey: false,
            // allowEnterKey: false,
            // stopKeydownPropagation: false,

            // input:
            // inputPlaceholder:
            // inputValue:
            // inputOptions: {
         //       mexico: 'mexico',
           // },

            customClass: {
            // 	container:
            // 	popup:
            // 	header:
            // 	title:
            // 	closeButton:
            // 	icon:
            // 	image:
            // 	content:
            // 	input:
            // 	actions:
            // 	confirmButton:
            // 	cancelButton:
            // 	footer:
            },

            showConfirmButton: false
            // confirmButtonColor: '#ff00ff80',
            // confirmButtonAriaLabel:

            // showCancelButton:
            // cancelButtonText:
            // cancelButtonColor:
            // cancelButtonAriaLabel:

            // buttonsStyling:
            // showCloseButton:
            // closeButtonAriaLabel:


            // imageUrl:
            // imageWidth:
            // imageHeight:
            // imageAlt:
        });
    }

     throwMessageError(Tittle: string, Text: string): void {
        Swal.fire({
            title: Tittle,
            text: Text,
            // html:
            icon: 'error',
            // confirmButtonText:
            // footer: html o texto
            // width: '45%',
            // padding: '1rem',
            // background: '#000',
            // grow:
            // backdrop:
            // timer: 2000,
            // timerProgressBar: true,
            // toast: true,
            position: 'center',
            // allowOutsideClick: false,
            // allowEscapeKey: false,
            // allowEnterKey: false,
            // stopKeydownPropagation: false,

            // input:
            // inputPlaceholder:
            // inputValue:
            // inputOptions: {
         //       mexico: 'mexico',
           // },

            customClass: {
            // 	container:
            // 	popup:
            // 	header:
            // 	title:
            // 	closeButton:
            // 	icon:
            // 	image:
            // 	content:
            // 	input:
            // 	actions:
            // 	confirmButton:
            // 	cancelButton:
            // 	footer:
            },

            // showConfirmButton:
            confirmButtonColor: '#ff00ff80',
            // confirmButtonAriaLabel:

            // showCancelButton:
            // cancelButtonText:
            // cancelButtonColor:
            // cancelButtonAriaLabel:

            // buttonsStyling:
            // showCloseButton:
            // closeButtonAriaLabel:


            // imageUrl:
            // imageWidth:
            // imageHeight:
            // imageAlt:
        });
    }

}
