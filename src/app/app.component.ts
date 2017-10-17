import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
declare var DesignmodoSlides: any;
declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    private sub: Subscription;

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.sub = this.route.queryParams.subscribe(params => {
            const id = params.id ? params.id : null;
            if (!id) {
               return;
            }
            console.log(id);

            DesignmodoSlides.start();

            setInterval(function () {
                if ($('.slideshow').hasClass('selected')) {
                    $('.slideshow.selected .background.shown')
                        .removeClass('shown')
                        .nextOrFirst('.background')
                        .addClass('shown');
                }
            }, 4000);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}