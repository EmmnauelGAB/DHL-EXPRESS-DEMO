import { ElementRef } from "@angular/core";
import { Dialog } from "../core/models/general/dialog.model";

export let headers = {
    'Content-Type': 'application/json;charset=utf-8'
};

export const enum CONST_TOKEN {
    HEADER = 'Authorization',
    PREFIX = 'Bearer',
    TOKEN = 'token',
    END_POINT = '/login'
}

export let MODAL_PROFILES:Dialog = {
    title: "Bloquear rol",
    // message: "Estas seguro que desea bloquear el rol",
    message: "",
    messageTemplate: "Estas seguro que desea bloquear el rol <span class='dialog_message-name'>*****</span>, los usuarios asociados a este rol no podran acceder a los modulos asignados.",
    titleBtnAffirmative: 'Sí, Bloquear rol',
    titleBtnCancel: 'Cancelar'
}