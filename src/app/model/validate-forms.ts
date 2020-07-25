import { Mascota } from './mascota';
import Swal from 'sweetalert2';
import { element } from 'protractor';

export class ValidateForms {

//  NRO_CHIP = 0, ESPECIE = 1, COLOR = 2, SEXO = 3, EDAD = 4, TAMAÑO = 5, ESTADO = 6

    private static list;

    static validate(nroInicio: number, nroCiclo: number, mascota: Mascota): boolean {
        let valido = true;
        this.setList(mascota);
        for (let i = nroInicio; i < nroCiclo; i++){
            if (!Boolean(this.list[i])){
                valido = false;
            }
        }
        return valido;
    }

    private static setList(mascota: Mascota) {
        this.list = new Array();
        this.list[0] = mascota.nroChip;
        this.list[1] = mascota.especie;
        this.list[2] = mascota.color;
        this.list[3] = mascota.sexo;
        this.list[4] = mascota.edad;
        this.list[5] = mascota.tamano;
        this.list[6] = mascota.estado;
    }

    static throwMessageInfo(Tittle: string, Text: string): void {
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

    static throwMessageSuccess(Tittle: string, Text: string): void {
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

    static throwMessageError(Tittle: string, Text: string): void {
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
