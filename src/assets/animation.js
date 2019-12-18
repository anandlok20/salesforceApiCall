export class animation {
    statusHide(status) {
        $(status).delay(1000).fadeOut();
    }

    statusShow(status) {
        $(status).fadeIn();
    }
}