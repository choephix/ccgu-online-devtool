webpackJsonp([1],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/card-view/card-view.module": [
		296,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* unused harmony export CardFilter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_view_card_view__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        // for ( var i = 0; i < 1024; i++ )
        //   this.cards.push({
        //       id:1+i,
        //       slug:"card-"+i,
        //       name:"Card "+i,
        //       description:"",
        //       c:"?",
        //       isTrap:false,
        //       power:0,
        //       rarity:0,
        //       priority:0,
        //       status:0,
        //       tags: ["Grand","storm","noattack"]
        //     });
        this.navCtrl = navCtrl;
        this.cards = [];
        this.selectedSegment = null;
        this.segments = [
            { name: "0" },
            { name: "1" },
            { name: "2" },
            { name: "3" },
            { name: "4" },
            { name: "5" },
            { name: "6" },
            { name: "7" },
            { name: "8" },
            { name: "9" },
            { name: "A" },
            { name: "B" },
            { name: "C" },
            { name: "D" },
            { name: "E" },
            { name: "F" },
        ];
        this.selectFilter(this.segments[0]);
    }
    HomePage.prototype.selectFilter = function (segment) {
        this.selectedSegment = segment;
        // Handle what to do when a category is selected
    };
    // Method executed when the slides are changed
    HomePage.prototype.slideChanged = function () {
    };
    HomePage.prototype.selectCard = function (card) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__card_view_card_view__["a" /* CardViewPage */], { card: card });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Projects Temp\ccgu-admin-tool\src\pages\home\home.html"*/'<ion-header class="bar-positive">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle end>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar class="le-toolbar">\n\n    <ion-row class="filters">\n\n      <ion-col no-padding>\n\n        <ion-slides (ionSlideDidChange)="slideChanged()" slidesPerView="10">\n\n          <ion-slide (click)="selectFilter(segment)" *ngFor="let segment of segments">\n\n            <button class="slide" [class.selected]="selectedSegment === segment" ion-button full large clear>{{ segment.name }}</button>\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding header-shrink scroll-event-interval="5">\n\n\n\n  <ion-list *ngFor="let card of cards">\n\n    <button ion-item (click)="selectCard(card)">{{card.slug}}</button>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Projects Temp\ccgu-admin-tool\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

var CardFilter = (function () {
    function CardFilter() {
    }
    return CardFilter;
}());

/// All Dev 1..9 Tokens
/// Traps Units 
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Mode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* unused harmony export CardView */
/* unused harmony export CardViewBundle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_models__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_view_card_view__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_pdc_list_pdc_list__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_deck_list_deck_list__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Mode = (function () {
    function Mode() {
    }
    return Mode;
}());

var ListPage = (function () {
    function ListPage(modalCtrl, data) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.data = data;
        this.Mode = {
            View: { icon: "eye", name: "view", show: ["rarity"] },
            Edit: { icon: "create", name: "edit", show: ["priority", "status"] },
            Quik: { icon: "flash", name: "quik", show: ["priority", "status"] },
            PDCs: { icon: "person", name: "pdcs", show: ["status"] },
            Deck: { icon: "albums", name: "deck", show: ["priority", "status"] },
        };
        this.subheaderHeight = 24;
        this.minCardWidth = 157;
        this.minCardHeight = 120;
        this.cardMargin = 1;
        this.marginX = 8;
        this.marginY = 8;
        this.cardViews = [];
        this.selectedBundle = null;
        this.bundles = [];
        this.zoom = 1.0;
        this.mode = this.Mode.Edit;
        this.selectedCardIDs = [];
        this.showPrettyName = false;
        this.showID = false;
        this.cardWidth = this.minCardWidth;
        this.cardHeight = this.minCardHeight;
        this.cardXFactor = this.cardWidth + this.cardMargin;
        this.cardYFactor = this.cardHeight + this.cardMargin;
        this.initializeBundles();
        for (var i = 0; i < ListPage_1.PAGE_CARDS_COUNT; i++)
            this.cardViews.push({ index: i, model: null });
        /// INIT FROM LOCAL
        {
            var bundleIndex = parseInt(localStorage.getItem("bundle-index"));
            if (isNaN(bundleIndex) || bundleIndex >= this.bundles.length)
                bundleIndex = 1;
            this.selectBundle(this.bundles[bundleIndex]);
            var mode = localStorage.getItem("mode");
            for (var key in this.Mode)
                if (this.Mode[key])
                    if (this.Mode[key].name == mode)
                        this.setMode(this.Mode[key]);
            this.refresh();
        }
        document.body.addEventListener("keydown", function (e) { return _this.onKey(e); });
        document.body.addEventListener("contextmenu", function (e) { if (!e.altKey)
            e.preventDefault(); });
        this.data.events.subscribe("list:resetmode", function () { return _this.setMode(_this.Mode.Edit); });
        this.data.events.subscribe("data:reload", function (s) { return _this.refresh(); });
    }
    ListPage_1 = ListPage;
    Object.defineProperty(ListPage.prototype, "pageWidth", {
        get: function () { return this.cardXFactor * ListPage_1.PAGE_COLUMNS + 2 * this.marginX; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListPage.prototype, "pageHeight", {
        get: function () { return this.cardYFactor * ListPage_1.PAGE_ROWS + this.marginY + this.minCardHeight; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListPage.prototype, "cards", {
        get: function () { return this.data.cardsMap; },
        enumerable: true,
        configurable: true
    });
    ListPage.prototype.onViewDidLoad = function () {
    };
    ListPage.prototype.initializeBundles = function () {
        for (var i = 0; i < 16; i++) {
            this.bundles.push({
                name: i.toString(16),
                startIndex: i * ListPage_1.PAGE_CARDS_COUNT,
                config: this.data.getCardSectionData(i)
            });
        }
    };
    ListPage.prototype.refresh = function () {
        console.log("refresh");
        for (var i = 0; i < this.bundles.length; i++)
            this.bundles[i].config = this.data.getCardSectionData(i);
        this.selectBundle(this.selectedBundle);
    };
    ListPage.prototype.onQuickChangeSlug = function (cv) {
        var v = cv.model.properties.slug;
        if (v.indexOf(':') > -1) {
            var a = v.split(':');
            if (a.length >= 2) {
                v = a[0];
                cv.model.properties.power = Number.parseInt(a[1]);
            }
        }
        cv.model.properties.slug = v.replace(/[^0-9a-z-]/gi, '');
    };
    ListPage.prototype.onQuickChangeDescription = function (cv) {
        // var v:string = cv.model.properties.description;
    };
    ListPage.prototype.onClick = function (cv) {
        if (this.mode == this.Mode.Edit) {
            var cvID = this.getSupposedCardID(cv);
            var seleIndex = this.selectedCardIDs.indexOf(cvID);
            if (this.selectedCardIDs.length < 1) {
                if (cv.model)
                    this.selectedCardIDs.push(cvID);
            }
            else if (seleIndex >= 0) {
                this.selectedCardIDs.splice(seleIndex, 1);
            }
            else {
                var seleID = this.selectedCardIDs[0];
                this.setCardID(this.cards[seleID], cvID);
                this.selectedCardIDs.length = 0;
                this.refresh();
            }
        }
        else if (this.mode == this.Mode.Quik) {
            this.cleanupEmpty();
            if (!cv.model)
                cv.model = this.makeCard(this.getSupposedCardID(cv));
        }
        else if (this.mode == this.Mode.PDCs) {
            if (cv.model && this.pdcListView.selectedPDCs.length > 0) {
                cv.model.setPDC(this.pdcListView.selectedPDCs[0]);
                this.pdcListView.selectedPDCs.length = 0;
            }
        }
        else if (this.mode == this.Mode.Deck) {
            if (cv.model)
                this.deckListView.add(cv.model.properties.slug);
        }
        else {
            this.selectedCardIDs.length = 0;
        }
    };
    ListPage.prototype.onDoubleClick = function (cv) {
        if (this.mode == this.Mode.PDCs) {
            // cv.model.setPDC( null );
            this.viewCard(this.getSupposedCardID(cv));
        }
        else if (this.mode == this.Mode.Edit) {
            this.viewCard(this.getSupposedCardID(cv));
        }
    };
    ListPage.prototype.onAuxClick = function (cv, e) {
        if (this.mode == this.Mode.PDCs) {
            cv.model.setPDC(null);
        }
        else if (this.mode == this.Mode.Edit) {
            this.viewCard(this.getSupposedCardID(cv));
        }
        else if (this.mode == this.Mode.Quik && cv.model) {
            this.duplicate(cv);
        }
    };
    ListPage.prototype.duplicate = function (cv) {
        var id = cv.model.ID;
        while (this.cards[id])
            id++;
        var c = this.makeCard(id);
        for (var key in cv.model.properties)
            c.properties[key] = cv.model.properties[key];
        this.refresh();
    };
    ListPage.prototype.onClickStatus = function (cv) {
        var A = [0, 1, 2, 3, 12];
        var i = (A.indexOf(cv.model.properties.status) + 1) % A.length;
        cv.model.properties.status = A[i];
    };
    ListPage.prototype.onKey = function (e) {
        if (e.ctrlKey && e.key.toUpperCase() == "S") {
            this.data.saveAll();
            e.preventDefault();
        }
        else if (!e.ctrlKey && e.altKey && !e.shiftKey) {
            e.preventDefault();
            if (e.keyCode >= 48 && e.keyCode <= 57) {
                this.selectBundle(this.bundles[e.keyCode - 48]);
            }
            else {
                switch (e.key.toUpperCase()) {
                    case "A":
                        this.selectBundle(this.bundles[10]);
                        break;
                    case "B":
                        this.selectBundle(this.bundles[11]);
                        break;
                    case "C":
                        this.selectBundle(this.bundles[12]);
                        break;
                    case "D":
                        this.selectBundle(this.bundles[13]);
                        break;
                    case "E":
                        this.selectBundle(this.bundles[14]);
                        break;
                    case "F":
                        this.selectBundle(this.bundles[15]);
                        break;
                    case "V":
                        this.setMode(this.Mode.View);
                        break;
                    case "P":
                        this.setMode(this.Mode.PDCs);
                        break;
                    case "Q":
                        this.setMode(this.Mode.Quik);
                        break;
                    case "Z":
                        this.setMode(this.Mode.Edit);
                        break;
                }
            }
        }
    };
    ListPage.prototype.cleanupEmpty = function () {
        var _this = this;
        this.cardViews.forEach(function (cv) {
            if (cv.model && cv.model.practicallyNull)
                _this.data.deleteCard(cv.model.ID);
        });
        this.refresh();
    };
    ListPage.prototype.viewCard = function (id) {
        var _this = this;
        var card = this.cards[id] ? this.cards[id] : this.makeCard(id);
        var params = { del: false };
        console.log(params);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__card_view_card_view__["a" /* CardViewPage */], { card: card, params: params });
        modal.onDidDismiss(function () {
            if (params.del || card.practicallyNull)
                _this.data.deleteCard(card.ID);
            _this.refresh();
        });
        modal.present();
    };
    ListPage.prototype.makeCard = function (id) {
        var card = this.data.createCard(id);
        id = id % ListPage_1.PAGE_CARDS_COUNT;
        var col = Math.floor(id % ListPage_1.PAGE_COLUMNS);
        var row = Math.floor(id / ListPage_1.PAGE_ROWS);
        var props = this.getDefaultPropsFor(col, row);
        for (var key in props)
            card.properties[key] = props[key];
        return card;
    };
    ListPage.prototype.setCardID = function (card, id) {
        var coll = this.cards[id];
        if (coll) {
            coll.setID(card.ID);
            this.cards[card.ID] = coll;
        }
        else {
            this.cards[card.ID] = null;
        }
        card.setID(id);
        this.cards[id] = card;
    };
    ListPage.prototype.getSupposedCardID = function (cv) { return this.selectedBundle.startIndex + cv.index; };
    ListPage.prototype.hasData = function (card) { return card.model != null && card.model != undefined; };
    ListPage.prototype.isSelected = function (card) { return this.selectedCardIDs.indexOf(this.getSupposedCardID(card)) >= 0; };
    ListPage.prototype.getX = function (i) { return this.marginX + Math.floor(i % ListPage_1.PAGE_COLUMNS) * this.cardXFactor; };
    ListPage.prototype.getY = function (i) {
        return this.marginY
            + Math.floor(i / (4 * ListPage_1.PAGE_COLUMNS) + 1) * this.subheaderHeight
            + Math.floor(i / ListPage_1.PAGE_COLUMNS) * this.cardYFactor;
    };
    ListPage.prototype.getColorClass = function (card) {
        if (card.model) {
            if (card.model.isTrap)
                return "trap";
            if (card.model.isGrand)
                return "grand";
            if (card.model.isSneak)
                return "sneak";
            return "normal";
        }
        else {
            var col = Math.floor(card.index % ListPage_1.PAGE_COLUMNS);
            var row = Math.floor(card.index / ListPage_1.PAGE_ROWS);
            var props = this.getDefaultPropsFor(col, row);
            if (props["type"] == __WEBPACK_IMPORTED_MODULE_1__app_models__["b" /* CardType */].Trap)
                return "trap";
            if (props["tags"] && props["tags"].indexOf("grand") >= 0)
                return "grand";
            if (props["tags"] && props["tags"].indexOf("sneak") >= 0)
                return "sneak";
            return "normal";
        }
    };
    ListPage.prototype.selectBundle = function (bundle) {
        this.selectedBundle = bundle;
        for (var i = 0; i < ListPage_1.PAGE_CARDS_COUNT; i++)
            this.cardViews[i].model = this.cards[i + bundle.startIndex];
        for (var i = 0; i < this.bundles.length; i++)
            if (this.bundles[i] == bundle)
                localStorage.setItem("bundle-index", i.toString());
    };
    ListPage.prototype.getDefaultPropsFor = function (col, row) {
        var funcIndex = this.selectedBundle.config.subsections[Math.floor(row / 4)].funcIndex;
        return CardViewBundle.PropsFunctions[funcIndex](col, row);
    };
    ListPage.prototype.cycleBundlePropsFunction = function (subsectionIndex, offset) {
        var section = this.selectedBundle.config.subsections[subsectionIndex];
        section.funcIndex += offset;
        while (section.funcIndex >= CardViewBundle.PropsFunctions.length)
            section.funcIndex -= CardViewBundle.PropsFunctions.length;
        while (section.funcIndex < 0)
            section.funcIndex += CardViewBundle.PropsFunctions.length;
    };
    ListPage.prototype.setMode = function (mode) {
        this.mode = mode;
        localStorage.setItem("mode", mode.name);
    };
    ListPage.prototype.getPriority = function (cv) {
        switch (cv.model.properties.priority) {
            case 7: return '❕';
            case 8: return '❗';
            case 9: return '❗❗';
            case 10: return '🛑';
            default: return '';
        }
    };
    ListPage.prototype.getRarity = function (cv) {
        var s = '';
        for (var i = 0; i < cv.model.properties.rarity; i++)
            s += '⭐';
        return s;
    };
    ListPage.prototype.getPDC = function (cv) {
        if (!cv.model)
            return null;
        if (!cv.model.hasPDC)
            return null;
        return this.data.pdcMap[cv.model.properties.pdc];
    };
    ListPage.PAGE_CARDS_COUNT = 256;
    ListPage.PAGE_COLUMNS = 16;
    ListPage.PAGE_ROWS = Math.ceil(ListPage_1.PAGE_CARDS_COUNT / ListPage_1.PAGE_COLUMNS);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pdcList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__components_pdc_list_pdc_list__["a" /* PdcListComponent */])
    ], ListPage.prototype, "pdcListView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('deckList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__components_deck_list_deck_list__["a" /* DeckListComponent */])
    ], ListPage.prototype, "deckListView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lescroll'),
        __metadata("design:type", HTMLDivElement)
    ], ListPage.prototype, "lescroll", void 0);
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Projects Temp\ccgu-admin-tool\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n\n\n    <!-- <button ion-button menuToggle end>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button> -->\n\n\n\n    <ion-grid grid-padding-width="1px">\n\n      <ion-row class="filters">\n\n        <ion-col no-padding *ngFor="let bundle of bundles">\n\n          <button \n\n            color="light"\n\n            class="page-button"\n\n            [class.selected]="bundle==selectedBundle" \n\n            (click)="selectBundle(bundle)"\n\n            ion-button [clear]="bundle!=selectedBundle"  full round>\n\n            {{ bundle.name }}\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-scroll>\n\n\n\n  <ion-fab bottom right #fabMode>\n\n    <button ion-fab large><ion-icon [name]="mode.icon"></ion-icon></button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab (click)="setMode(Mode.View);fabMode.close()"><ion-icon name="{{Mode.View.icon}}"></ion-icon></button>\n\n      <button ion-fab (click)="setMode(Mode.Edit);fabMode.close()"><ion-icon name="{{Mode.Edit.icon}}"></ion-icon></button>\n\n      <button ion-fab (click)="setMode(Mode.Quik);fabMode.close()"><ion-icon name="{{Mode.Quik.icon}}"></ion-icon></button>\n\n      <button ion-fab (click)="setMode(Mode.Deck);fabMode.close()"><ion-icon name="{{Mode.Deck.icon}}"></ion-icon></button>\n\n      <button ion-fab (click)="setMode(Mode.PDCs);fabMode.close()"><ion-icon name="{{Mode.PDCs.icon}}"></ion-icon></button>\n\n    </ion-fab-list>\n\n    <ion-fab-list side="left">\n\n      <button ion-fab (click)="showID=!showID;fabMode.close()">ID</button>\n\n      <button ion-fab (click)="showPrettyName=!showPrettyName;fabMode.close()"><ion-icon name="glasses"></ion-icon></button>\n\n      <button ion-fab (click)="data.saveAll();fabMode.close()"><ion-icon name="cloud-upload"></ion-icon></button>\n\n      <button ion-fab (click)="data.loadAll();fabMode.close()"><ion-icon name="cloud-download"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n  <ion-fab bottom left #fabZoom>\n\n    <button ion-fab large><ion-icon name="search"></ion-icon></button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab (click)="zoom=1.00;fabZoom.close();">100%</button>\n\n      <button ion-fab (click)="zoom=0.75;fabZoom.close();">75%</button>\n\n      <button ion-fab (click)="zoom=0.50;fabZoom.close();">50%</button>\n\n      <button ion-fab (click)="zoom=0.25;fabZoom.close();">25%</button>\n\n    </ion-fab-list>\n\n    <ion-fab-list side="right">\n\n      <button ion-fab >{{data.cards.data?data.cards.data.length:\'n/a\'}}</button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n  <ion-fab bottom center #fabSave *ngIf="data.anyChanges()" (click)="data.saveAll();fabMode.close()">\n\n    <button ion-fab large [color]="data.isBusy()?\'dark\':\'secondary\'"><ion-icon name="cloud"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n  <div *ngIf="mode==Mode.PDCs" style="width:33%; height:100%; top:0; left:0; position:absolute; overflow:auto; margin:0; padding:0;">\n\n    <div style="max-height:100%; overflow:auto; margin:0; padding:0;">\n\n      <pdc-list #pdcList></pdc-list>\n\n    </div>\n\n  </div>\n\n\n\n  <div *ngIf="mode==Mode.Deck" style="width:33%; height:100%; top:0; left:0; position:absolute; overflow:auto; margin:0; padding:0;">\n\n    <div style="max-height:100%; overflow:auto; margin:0; padding:0;">\n\n      <deck-list #deckList></deck-list>\n\n    </div>\n\n  </div>\n\n\n\n  <div #lescroll id="lescroll" \n\n        [style.width]="mode==Mode.PDCs||mode==Mode.Deck?\'67%\':\'100%\'"\n\n        [style.zoom]="zoom"\n\n        [class]="\'mode-\'+mode.name" \n\n        >\n\n\n\n    <div style.width="{{pageWidth}}px" style.height="{{pageHeight}}px" style="overflow:hidden;">\n\n      <div *ngFor="let cv of cardViews" \n\n            (click)="onClick(cv)"\n\n            (dblclick)="onDoubleClick(cv)"\n\n            (auxclick)="onAuxClick(cv,$event)"\n\n            style.width="{{cardWidth}}px"\n\n            style.height="{{cardHeight}}px"\n\n            style.left="{{getX(cv.index)}}px"\n\n            style.top="{{getY(cv.index)}}px"\n\n            [style.display]="getSupposedCardID(cv)==0?\'none\':\'block\'"\n\n            [class.selected]="isSelected(cv)"\n\n            class="lecard {{getColorClass(cv)}} {{hasData(cv)?\'non-empty\':\'empty\'}}">\n\n        <div *ngIf="hasData(cv) && mode != Mode.Quik">\n\n          <div class="slug" *ngIf="mode!=Mode.View" [style.opacity]="!showPrettyName||cv.model.hasName?1:.25">\n\n            <b>{{showPrettyName?cv.model.prettyName:cv.model.prettySlug}}</b></div>\n\n          <div class="slug" *ngIf="mode==Mode.View" [style.opacity]="cv.model.hasName?1:.25">{{cv.model.prettyName}}</div>\n\n          <div class="description">\n\n            <div *ngIf="cv.model.properties.tags.length>0" class="tags">{{cv.model.properties.tags.join(\' \')}}</div>\n\n            <div>{{cv.model.prettyDescription}}</div>\n\n          </div>\n\n          <div class="power"      *ngIf="!cv.model.isTrap">{{cv.model.prettyPower}}</div>\n\n          <!-- <div class="priority"   *ngIf="mode.show.indexOf(\'priority\')>=0">{{getPriority(cv)}}</div> -->\n\n          <div class="rarity"     *ngIf="mode.show.indexOf(\'rarity\')>=0">{{getRarity(cv)}}</div>\n\n          <div class="dev-status" *ngIf="mode.show.indexOf(\'status\')>=0" [style.background]="cv.model.prettyStatusColor">{{cv.model.prettyStatus}}</div>\n\n          <div class="name" *ngIf="mode==Mode.PDCs&&getPDC(cv)">{{getPDC(cv).name}}</div>\n\n          <div *ngIf="cv.model&&cv.model.properties.status==12" \n\n                style="width:100%;height:100%;background:black;opacity:.35;position:absolute;top:0;"></div>\n\n          <ion-badge class="id" *ngIf="showID" mode="ios" style="position:absolute; right:5px; top:-5px;" color="light">{{cv.model.ID}}</ion-badge>\n\n        </div>\n\n        <div *ngIf="hasData(cv) && mode == Mode.Quik">\n\n          <ion-input type="text" [(ngModel)]="cv.model.properties.slug" class="slug" (change)="onQuickChangeSlug(cv)"></ion-input>\n\n          <textarea type="text"  [(ngModel)]="cv.model.properties.description" class="description" (change)="onQuickChangeDescription(cv)"></textarea>\n\n          <div class="power"      *ngIf="!cv.model.isTrap">{{cv.model.prettyPower}}</div>\n\n          <div class="dev-status" *ngIf="mode.show.indexOf(\'status\')>=0" \n\n              (click)="onClickStatus(cv)"\n\n              [style.background]="cv.model.prettyStatusColor">{{cv.model.prettyStatus}}</div>\n\n          <div class="name" *ngIf="mode==Mode.PDCs&&getPDC(cv)">{{getPDC(cv).name}}</div>\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngFor="let subsection of selectedBundle.config.subsections; let i = index" \n\n            class="subsection-header"\n\n            style.top="{{getY(i*16*4)}}px">\n\n        <ion-item>\n\n          <button mini clear item-start (click)="cycleBundlePropsFunction(i,-1)">◀</button>\n\n          <button mini clear item-start (click)="cycleBundlePropsFunction(i,1)">▶</button>\n\n          <ion-input [(ngModel)]="subsection.header" ></ion-input>\n\n        </ion-item>\n\n      </div>\n\n    </div>\n\n  </div> \n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Projects Temp\ccgu-admin-tool\src\pages\list\list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

var CardView = (function () {
    function CardView() {
    }
    return CardView;
}());

var CardViewBundle = (function () {
    function CardViewBundle() {
    }
    CardViewBundle.PropsFunctions = [
        function (col, row) { return DP.NRML; },
        function (col, row) { return DP.SNEK; },
        function (col, row) { return DP.GRND; },
        function (col, row) { return DP.TRAP; },
        function (col, row) { return col < 2 ? DP.SNEK : col < 10 ? DP.NRML : col < 12 ? DP.GRND : DP.TRAP; },
        function (col, row) { return col < 3 ? DP.SNEK : col < 9 ? DP.NRML : col < 12 ? DP.GRND : DP.TRAP; },
        function (col, row) { return col < 4 ? DP.SNEK : col < 12 ? DP.NRML : DP.GRND; },
        function (col, row) { return [DP.SNEK, DP.NRML, DP.NRML, DP.GRND][col % 4]; },
        function (col, row) { return (col % 4 > 3) ? DP.TRAP : [DP.SNEK, DP.SNEK, DP.NRML, DP.NRML, DP.NRML, DP.NRML, DP.GRND, DP.GRND][col % 8]; },
        function (col, row) { return [DP.SNEK, DP.NRML, DP.GRND, DP.TRAP][row % 4]; },
        function (col, row) { return [DP.NRML, DP.SNEK, DP.GRND, DP.TRAP][row % 4]; },
        function (col, row) { return [DP.SNEK, DP.GRND][Math.floor(row / 2) % 2]; },
        function (col, row) { return [DP.SNEK, DP.TRAP][Math.floor(row / 2) % 2]; },
        function (col, row) { return [DP.NRML, DP.TRAP][Math.floor(row / 2) % 2]; },
        function (col, row) { return [DP.NRML, DP.TRAP][row % 2]; },
        function (col, row) { return [DP.NRML, DP.TRAP][col % 2]; },
        function (col, row) { return [DP.NRML, DP.GRND][row % 2]; },
        function (col, row) { return [DP.NRML, DP.GRND][col % 2]; },
        function (col, row) { return [DP.NRML, DP.GRND][(row + col) % 2]; },
        function (col, row) { return [DP.NRML, DP.SNEK, DP.TRAP, DP.TRAP][row % 4]; },
        function (col, row) { return [DP.SNEK, DP.GRND, DP.TRAP, DP.TRAP][row % 4]; },
    ];
    return CardViewBundle;
}());

var DP = (function () {
    function DP() {
    }
    DP.TRAP = { type: __WEBPACK_IMPORTED_MODULE_1__app_models__["b" /* CardType */].Trap };
    DP.NRML = { type: __WEBPACK_IMPORTED_MODULE_1__app_models__["b" /* CardType */].Unit };
    DP.SNEK = { type: __WEBPACK_IMPORTED_MODULE_1__app_models__["b" /* CardType */].Unit, tags: ["sneak"] };
    DP.GRND = { type: __WEBPACK_IMPORTED_MODULE_1__app_models__["b" /* CardType */].Unit, tags: ["grand"] };
    return DP;
}());
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdcListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PdcListComponent = (function () {
    function PdcListComponent(data) {
        this.data = data;
        this.selectedPDCs = [];
        this.expandedPDCs = [];
    }
    Object.defineProperty(PdcListComponent.prototype, "chars", {
        get: function () { return this.data.pdc.data; },
        enumerable: true,
        configurable: true
    });
    PdcListComponent.prototype.expand = function (pdc) {
        if (pdc == null) {
            this.expandedPDCs.length = 0;
        }
        else if (this.expandedPDCs.indexOf(pdc) < 0) {
            this.expandedPDCs.length = 0;
            this.expandedPDCs.push(pdc);
        }
        else {
            this.expandedPDCs.length = 0;
        }
    };
    PdcListComponent.prototype.select = function (pdc) {
        if (pdc == null) {
            this.selectedPDCs.length = 0;
        }
        else if (this.selectedPDCs.indexOf(pdc) < 0) {
            this.selectedPDCs.length = 0;
            this.selectedPDCs.push(pdc);
        }
        // else
        // {
        //   this.selectedPDCs.length = 0;
        // }
    };
    PdcListComponent.prototype.isSelected = function (pdc) { return this.selectedPDCs.indexOf(pdc) > -1; };
    PdcListComponent.prototype.isExpanded = function (pdc) { return this.expandedPDCs.indexOf(pdc) > -1; };
    PdcListComponent.prototype.hasStuff = function (pdc) { return (Boolean)(pdc.notes_cardstats || pdc.notes_character); };
    PdcListComponent.prototype.finish = function () { this.data.events.publish("list:resetmode"); };
    PdcListComponent.prototype.stop = function (event) { event.stopPropagation(); };
    PdcListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'pdc-list',template:/*ion-inline-start:"C:\Projects Temp\ccgu-admin-tool\src\components\pdc-list\pdc-list.html"*/'<div style="background:white; overflow:hidden;" #pdcWrapper>\n  <ion-list>\n    <ion-item-group>\n      <ion-item-divider color="light" (auxclick)="select(null)">\n        <ion-icon name="list" item-start></ion-icon>\n        Public Domain Characters (+)\n        <ion-icon name="close-circle" (click)="finish()" color="faded" item-end></ion-icon>\n      </ion-item-divider>\n      <!-- <ion-item-divider color="light">Public Domain Characters</ion-item-divider> -->\n      <!-- <div class="pdc-list-item" *ngFor="let pdc of chars; let i = index"> -->\n      <div class="pdc-list-item" *ngFor="let pdc of chars; let i = index" (click)="select(pdc)">\n        <ion-item [class.gray]="data.anyCardHasPDC(pdc)" [class.selected]="isSelected(pdc)" text-wrap>\n          <ion-icon name="arrow-up" (click)="data.createPDC(pdc.origin,i); stop($event)" color="faded" item-start></ion-icon>\n          <ion-icon name="arrow-down" (click)="data.createPDC(pdc.origin,i+1); stop($event)" color="faded" item-start></ion-icon>\n          <ion-input type="text"[(ngModel)]="pdc.origin" class="origin"></ion-input>\n          <ion-input type="text"[(ngModel)]="pdc.name" class="name"></ion-input>\n          <!-- <ion-icon name="arrow-forward" (click)="select(pdc)" color="faded" item-end></ion-icon> -->\n          <ion-icon *ngIf="!isExpanded(pdc)&&hasStuff(pdc)" name="radio-button-on" (click)="expand(pdc);" color="faded" item-end></ion-icon>\n          <ion-icon *ngIf="!isExpanded(pdc)&&!hasStuff(pdc)" name="radio-button-off" (click)="expand(pdc);" color="faded" item-end></ion-icon>\n          <ion-icon *ngIf="isExpanded(pdc)" name="close" (click)="expand(pdc); stop($event)" color="faded" item-end></ion-icon>\n        </ion-item>\n\n        <div *ngIf="isExpanded(pdc)">\n          <ion-textarea placeholder="notes (character)" [(ngModel)]="pdc.notes_character"></ion-textarea>\n          <ion-textarea placeholder="notes (card stats)" [(ngModel)]="pdc.notes_cardstats"></ion-textarea>\n          <ion-textarea placeholder="faction etc." [(ngModel)]="pdc.faction"></ion-textarea>\n          <p class="guid">{{pdc.guid}}</p>\n        </div>\n      </div>\n    </ion-item-group>\n  </ion-list>\n</div>\n'/*ion-inline-end:"C:\Projects Temp\ccgu-admin-tool\src\components\pdc-list\pdc-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */]])
    ], PdcListComponent);
    return PdcListComponent;
}());

//# sourceMappingURL=pdc-list.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeckListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pretty_pretty__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeckListComponent = (function () {
    function DeckListComponent(data, pretty) {
        this.data = data;
        this.pretty = pretty;
    }
    Object.defineProperty(DeckListComponent.prototype, "decks", {
        get: function () { return this.data.decks.data; },
        enumerable: true,
        configurable: true
    });
    DeckListComponent.prototype.select = function (deck) {
        this.selectedDeck = deck;
    };
    DeckListComponent.prototype.add = function (slug) {
        if (this.selectedDeck)
            this.selectedDeck.slugs.unshift(slug);
    };
    DeckListComponent.prototype.remove = function (index) {
        if (this.selectedDeck)
            this.selectedDeck.slugs.splice(index, 1);
    };
    DeckListComponent.prototype.move = function (index, offset) {
        if (index <= 0)
            return;
        if (this.selectedDeck) {
            if (index >= this.selectedDeck.slugs.length)
                return;
            var slug = this.selectedDeck.slugs[index];
            this.selectedDeck.slugs.splice(index, 1);
            this.selectedDeck.slugs.splice(index + offset, 0, slug);
        }
        else {
            if (index >= this.decks.length)
                return;
            var deck = this.decks[index];
            this.decks.splice(index, 1);
            this.decks.splice(index + offset, 0, deck);
        }
    };
    DeckListComponent.prototype.finish = function () { this.data.events.publish("list:resetmode"); };
    DeckListComponent.prototype.stop = function (event) { event.stopPropagation(); };
    DeckListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'deck-list',template:/*ion-inline-start:"C:\Projects Temp\ccgu-admin-tool\src\components\deck-list\deck-list.html"*/'<div style="background:white; overflow:hidden;" #pdcWrapper>\n    <ion-list no-lines>\n      <ion-item-group *ngIf="!selectedDeck" no-lines>\n        <ion-item-divider color="light" (auxclick)="select(null)">\n          Dev-Decks\n          <ion-icon name="list" item-start></ion-icon>\n          <ion-icon name="close-circle" (click)="finish()" color="faded" item-end></ion-icon>\n        </ion-item-divider>\n        <div class="deck-list-item" *ngFor="let deck of decks; let i = index" (dblclick)="select(deck)" (auxclick)="move(i,-i)">\n          <ion-item text-wrap>\n            <ion-input type="text"[(ngModel)]="deck.name" class="name" [class.bold]="deck.slugs.length>0"></ion-input>\n            <ion-icon name="arrow-dropright" (click)="select(deck); stop($event)" color="faded" item-start></ion-icon>\n            <ion-icon name="arrow-up" (click)="move(i,-1); stop($event)" color="faded" item-end *ngIf="i>0"></ion-icon>\n            <ion-icon name="arrow-down" (click)="move(i,1); stop($event)" color="faded" item-end *ngIf="i<decks.length-1"></ion-icon>\n            <!-- <ion-icon *ngIf="isExpanded(pdc)" name="close" (click)="expand(pdc); stop($event)" color="faded" item-end></ion-icon> -->\n          </ion-item>\n        </div>\n      </ion-item-group>\n      <ion-item-group *ngIf="selectedDeck" class="cards">\n        <ion-item-divider color="light" (auxclick)="select(null)" (dblclick)="select(null)">\n          Dev-Decks \\ {{selectedDeck.name}}\n          <ion-icon name="list" item-start></ion-icon>\n          <ion-icon name="return-left" (click)="select(null); stop($event)" color="faded" item-end></ion-icon>\n        </ion-item-divider>\n        <div class="card-list-item {{pretty.getColorClass(data.findCardBySlug(slug))}}" \n             *ngFor="let slug of selectedDeck.slugs; let i = index;" \n             (auxclick)="remove(i)">\n          <ion-item text-wrap>\n            {{slug}} ({{data.findCardBySlug(slug) ? data.findCardBySlug(slug).properties.power : "?"}})\n            <ion-icon name="{{i>0?\'arrow-up\':\'remove\'}}" (click)="move(i,-1); stop($event);" color="faded" item-start></ion-icon>\n            <ion-icon name="{{i<selectedDeck.slugs.length-1?\'arrow-down\':\'remove\'}}" (click)="move(i,1); stop($event)" color="faded" item-start></ion-icon>\n            <ion-icon name="close" (click)="remove(i); stop($event)" color="faded" item-end></ion-icon>\n          </ion-item>\n        </div>\n      </ion-item-group>\n    </ion-list>\n  </div>\n  '/*ion-inline-end:"C:\Projects Temp\ccgu-admin-tool\src\components\deck-list\deck-list.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_pretty_pretty__["a" /* PrettyProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_pretty_pretty__["a" /* PrettyProvider */]) === "function" && _b || Object])
    ], DeckListComponent);
    return DeckListComponent;
    var _a, _b;
}());

//# sourceMappingURL=deck-list.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrettyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrettyProvider = (function () {
    function PrettyProvider() {
    }
    PrettyProvider.prototype.getColorClass = function (model) {
        if (model) {
            if (model.isTrap)
                return "trap";
            if (model.isGrand)
                return "grand";
            if (model.isSneak)
                return "sneak";
            return "normal";
        }
        return "null";
    };
    PrettyProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PrettyProvider);
    return PrettyProvider;
}());

//# sourceMappingURL=pretty.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_card_view_card_view__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_autosize_autosize__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_data_data__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_pdc_list_pdc_list__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_deck_list_deck_list__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_pretty_pretty__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_card_view_card_view__["a" /* CardViewPage */],
                __WEBPACK_IMPORTED_MODULE_10__directives_autosize_autosize__["a" /* AutosizeDirective */],
                __WEBPACK_IMPORTED_MODULE_12__components_pdc_list_pdc_list__["a" /* PdcListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_deck_list_deck_list__["a" /* DeckListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/card-view/card-view.module#CardViewPageModule', name: 'CardViewPage', segment: 'card-view', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_card_view_card_view__["a" /* CardViewPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_data_data__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_pretty_pretty__["a" /* PrettyProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: "home" },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], icon: "cash" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Projects Temp\ccgu-admin-tool\src\app\app.html"*/'<ion-menu [content]="content" [swipeEnabled]="false" side="right" type="overlay">\n\n\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <button ion-item icon-only menuClose *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-icon name="{{p.icon}}"></ion-icon>\n\n    </button>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Projects Temp\ccgu-admin-tool\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutosizeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutosizeDirective = (function () {
    function AutosizeDirective(element) {
        this.element = element;
    }
    AutosizeDirective.prototype.onInput = function (textArea) {
        this.adjust();
    };
    AutosizeDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    AutosizeDirective.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + "px";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], AutosizeDirective.prototype, "onInput", null);
    AutosizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'ion-textarea[autosize]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], AutosizeDirective);
    return AutosizeDirective;
}());

//# sourceMappingURL=autosize.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_models__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataProvider = (function () {
    function DataProvider(http, events, toast) {
        var _this = this;
        this.http = http;
        this.events = events;
        this.toast = toast;
        this.FILE_CARDS = "card-models.json";
        this.FILE_CONFIG = "editor-stuff.json";
        this.FILE_PDC = "pdc.json";
        this.FILE_DECKS = "decks.json";
        this.cardsMap = new Map();
        this.pdcMap = new Map();
        this.config = new DataFile(this.FILE_CONFIG, http);
        this.cards = new DataFile(this.FILE_CARDS, http);
        this.pdc = new DataFile(this.FILE_PDC, http);
        this.decks = new DataFile(this.FILE_DECKS, http);
        this.config.data = new ConfigurationData();
        this.datafiles = [this.config, this.cards, this.pdc, this.decks];
        this.loadAll();
        setInterval(function () { return _this.checkForChanges(); }, 2000);
    }
    DataProvider.prototype.isBusy = function () { return this.saving || !this.datafiles.every(function (v, i, a) { return !v.busy; }); };
    DataProvider.prototype.anyChanges = function () { return !this.datafiles.every(function (v, i, a) { return !v.dataHasChanged; }); };
    DataProvider.prototype.checkForChanges = function () { this.datafiles.forEach(function (v) { v.checkForChanges(); }); };
    DataProvider.prototype.createCard = function (id) {
        var card = __WEBPACK_IMPORTED_MODULE_3__app_models__["a" /* CardModel */].makeClean(id);
        card.properties.power = 0;
        card.properties.priority = 0;
        card.properties.rarity = 0;
        card.properties.status = 0;
        card.properties.type = __WEBPACK_IMPORTED_MODULE_3__app_models__["b" /* CardType */].Unit;
        card.properties.slug = "";
        card.properties.name = "";
        card.properties.description = "";
        card.properties.tags = [];
        this.cardsMap[id] = card;
        this.cards.data.unshift(card.properties);
        this.cards.dataHasChanged = true;
        return card;
    };
    DataProvider.prototype.createPDC = function (origin, at) {
        var pdc = {
            origin: origin,
            name: "",
            notes_character: "",
            notes_cardstats: "",
            tags: [],
            faction: "",
            guid: GUID.make()
        };
        this.pdc.data.splice(at, 0, pdc);
        return pdc;
    };
    DataProvider.prototype.deleteCard = function (id) {
        delete this.cardsMap[id];
        for (var i = this.cards.data.length - 1; i >= 0; i--)
            if (this.cards.data[i].id == id)
                this.cards.data.splice(i, 1);
        this.cards.dataHasChanged = true;
    };
    DataProvider.prototype.getCardSectionData = function (index) { return this.config.data.cardSections[index % this.config.data.cardSections.length]; };
    DataProvider.prototype.anyCardHasPDC = function (pdc) {
        if (!this.cards.data)
            return false;
        for (var i = 0; i < this.cards.data.length; i++)
            if (this.cards.data[i].pdc == pdc.guid)
                return true;
        return false;
    };
    DataProvider.prototype.findCardBySlug = function (slug) {
        return this.cardsMap[this.findCardDataBySlug(slug).id];
        for (var _i = 0, _a = Array.from(this.cardsMap.values()); _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.properties.slug == slug)
                return card;
        }
        return null;
    };
    DataProvider.prototype.findCardDataBySlug = function (slug) {
        for (var i = 0; i < this.cards.data.length; i++)
            if (this.cards.data[i].slug == slug)
                return this.cards.data[i];
        return null;
    };
    ///
    DataProvider.prototype.loadAll = function () {
        var _this = this;
        console.log("loading data from github gist");
        this.config.load(function (data) { return _this.onLoaded_Configuration(data); });
        this.cards.load(function (data) { return _this.onLoaded_Cards(data); });
        this.pdc.load(function (data) { return _this.onLoaded_PDCharacters(data); });
        this.decks.load(function (data) { return _this.onLoaded_Decks(data); });
    };
    DataProvider.prototype.onLoaded_Configuration = function (data) {
        this.events.publish("data:reload");
    };
    DataProvider.prototype.onLoaded_Cards = function (data) {
        // for ( let i = data.length - 1; i >= 0; i-- )
        // {
        //   for ( let j = data.length - 1; j > i; j-- )
        //   {
        //     let a = data[i], b = data[j];
        //     if ( a.slug == b.slug && a.description == b.description )
        //     {
        //       console.log( "duplicate cards: " + a.id + " = " + b.id + " " + a.slug );
        //       this.cards.data.splice( a.id > b.id ? i : j, 1 );
        //     }
        //   }
        // }
        // for ( let i = data.length - 1; i >= 0; i-- )
        // {
        //   for ( let j = data.length - 1; j > i; j-- )
        //   {
        //     let a = data[i], b = data[j];
        //     if ( a.id == b.id )
        //     {
        //       console.log( "id collision: " + a.slug + " vs " + b.slug );
        //       a.id += 256;
        //     }
        //   }
        // }
        // this.cardsMap.clear();
        this.cardsMap = new Map();
        for (var i = 0; i < data.length; i++)
            this.cardsMap[data[i].id] = __WEBPACK_IMPORTED_MODULE_3__app_models__["a" /* CardModel */].makeFromData(data[i]);
        this.events.publish("data:reload");
    };
    DataProvider.prototype.onLoaded_PDCharacters = function (data) {
        for (var i = data.length - 1; i >= 0; i--)
            this.pdcMap[data[i].guid] = data[i];
        this.events.publish("data:reload");
    };
    DataProvider.prototype.onLoaded_Decks = function (data) {
        // for ( let i = 4; i < 64; i++ )
        //   this.decks.data.push({name:"("+i+")",slugs:[]})
        this.events.publish("data:reload");
    };
    DataProvider.prototype.sortPDCs = function () {
        this.pdc.data.sort(sortFunction);
        function sortFunction(aa, bb) {
            var a = aa.origin.toUpperCase();
            var b = bb.origin.toUpperCase();
            return a < b ? -1 : a > b ? 1 : 0;
        }
    };
    DataProvider.prototype.saveAll = function () {
        var _this = this;
        this.sortPDCs();
        var token = "6dae67b6" + "f3085406" + "f57a9412";
        token += "c1d8d6ef";
        token += "5d888863";
        var url = "https://api.github.com/gists/4c390b3e5502811d196233104c89f755";
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set("Authorization", "token  " + token);
        var files = {};
        this.datafiles.forEach(function (datafile) {
            if (datafile.dataHasChanged)
                files[datafile.filename] = { content: JSON.stringify(datafile.data, null, 2) };
        });
        this.saving = true;
        this.http.post(url, { files: files }, { headers: headers })
            .subscribe(function (data) {
            console.log("saved", data);
            _this.saving = false;
            _this.datafiles.forEach(function (datafile) { return datafile.updateOriginalState(); });
            _this.showToast("Data Saved");
        });
    };
    DataProvider.prototype.showToast = function (msg) {
        this.toast.create({ message: msg, duration: 1500 }).present();
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]) === "function" && _c || Object])
    ], DataProvider);
    return DataProvider;
    var _a, _b, _c;
}());

var DataFile = (function () {
    function DataFile(filename, http) {
        this.filename = filename;
        this.http = http;
        this.URL_FILE = "https://gist.githubusercontent.com/choephix/4c390b3e5502811d196233104c89f755/raw/";
    }
    DataFile.prototype.load = function (callbackLoaded) {
        var _this = this;
        console.log("loading " + this.filename);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers.set("content-type", "application/json");
        headers.set('cache-control', 'no-cache');
        // headers.set( 'x-apikey', '5acb82b08f64a5337173a18a' );
        this.busy = true;
        var url_cards = this.URL_FILE + this.filename + this.cacheBustSuffix();
        this.http.get(url_cards, { headers: headers }).subscribe(function (data) {
            console.log("loaded " + _this.filename, data);
            _this.busy = false;
            _this.data = data;
            _this.updateOriginalState();
            callbackLoaded(_this.data);
        });
    };
    DataFile.prototype.updateOriginalState = function () {
        this.dataOriginalJson = JSON.stringify(this.data);
        this.dataHasChanged = false;
    };
    DataFile.prototype.checkForChanges = function () {
        this.dataHasChanged = this.dataOriginalJson != JSON.stringify(this.data);
    };
    DataFile.prototype.cacheBustSuffix = function () { return '?' + (new Date().valueOf() % 1000000); };
    return DataFile;
}());
var ConfigurationData = (function () {
    function ConfigurationData() {
        this.cardSections = [
            { subsections: [{ funcIndex: 0, header: "One" }, { funcIndex: 0, header: "Two" }, { funcIndex: 0, header: "Three" }, { funcIndex: 0, header: "Four" }] },
            { subsections: [{ funcIndex: 0, header: "One" }, { funcIndex: 0, header: "Two" }, { funcIndex: 0, header: "Three" }, { funcIndex: 0, header: "Four" }] },
            { subsections: [{ funcIndex: 0, header: "One" }, { funcIndex: 0, header: "Two" }, { funcIndex: 0, header: "Three" }, { funcIndex: 0, header: "Four" }] },
            { subsections: [{ funcIndex: 0, header: "One" }, { funcIndex: 0, header: "Two" }, { funcIndex: 0, header: "Three" }, { funcIndex: 0, header: "Four" }] },
            { subsections: [{ funcIndex: 0, header: "One" }, { funcIndex: 0, header: "Two" }, { funcIndex: 0, header: "Three" }, { funcIndex: 0, header: "Four" }] },
            { subsections: [{ funcIndex: 0, header: "One" }, { funcIndex: 0, header: "Two" }, { funcIndex: 0, header: "Three" }, { funcIndex: 0, header: "Four" }] },
            { subsections: [{ funcIndex: 0, header: "One" }, { funcIndex: 0, header: "Two" }, { funcIndex: 0, header: "Three" }, { funcIndex: 0, header: "Four" }] },
            { subsections: [{ funcIndex: 0, header: "One" }, { funcIndex: 0, header: "Two" }, { funcIndex: 0, header: "Three" }, { funcIndex: 0, header: "Four" }] },
            { subsections: [{ funcIndex: 0, header: "One" }, { funcIndex: 0, header: "Two" }, { funcIndex: 0, header: "Three" }, { funcIndex: 0, header: "Four" }] },
            { subsections: [{ funcIndex: 0, header: "One" }, { funcIndex: 0, header: "Two" }, { funcIndex: 0, header: "Three" }, { funcIndex: 0, header: "Four" }] },
            { subsections: [{ funcIndex: 0, header: "One" }, { funcIndex: 0, header: "Two" }, { funcIndex: 0, header: "Three" }, { funcIndex: 0, header: "Four" }] },
            { subsections: [{ funcIndex: 0, header: "One" }, { funcIndex: 0, header: "Two" }, { funcIndex: 0, header: "Three" }, { funcIndex: 0, header: "Four" }] },
            { subsections: [{ funcIndex: 0, header: "One" }, { funcIndex: 0, header: "Two" }, { funcIndex: 0, header: "Three" }, { funcIndex: 0, header: "Four" }] },
            { subsections: [{ funcIndex: 0, header: "One" }, { funcIndex: 0, header: "Two" }, { funcIndex: 0, header: "Three" }, { funcIndex: 0, header: "Four" }] },
            { subsections: [{ funcIndex: 0, header: "One" }, { funcIndex: 0, header: "Two" }, { funcIndex: 0, header: "Three" }, { funcIndex: 0, header: "Four" }] },
            { subsections: [{ funcIndex: 0, header: "One" }, { funcIndex: 0, header: "Two" }, { funcIndex: 0, header: "Three" }, { funcIndex: 0, header: "Four" }] },
        ];
    }
    return ConfigurationData;
}());
var GUID = (function () {
    function GUID() {
    }
    GUID.make = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return GUID;
}());
//# sourceMappingURL=data.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardViewPage = (function () {
    function CardViewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tags = ["sneak", "grand", "global", "persistent", "noattack", "norelocate", "nomove", "rush", "piercing", "swift", "swapper", "notribute", "invulnerable", "incorporeal", "dev", "token"];
        this.card = navParams.get("card");
    }
    CardViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardViewPage');
    };
    CardViewPage.prototype.delete = function () {
        this.navParams.get('params').del = true;
        this.navCtrl.pop();
    };
    CardViewPage.prototype.save = function () {
        console.log('Save CardViewPage');
        this.navCtrl.pop();
    };
    CardViewPage.prototype.setPower = function (value) {
        this.card.properties.power = value;
        this.card.properties.type = __WEBPACK_IMPORTED_MODULE_2__app_models__["b" /* CardType */].Unit;
    };
    CardViewPage.prototype.setStatus = function (value) { this.card.properties.status = value; };
    CardViewPage.prototype.setPriority = function (value) { this.card.properties.priority = value; };
    CardViewPage.prototype.setRarity = function (value) { this.card.properties.rarity = value; };
    CardViewPage.prototype.toggle = function () {
        var hidables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            hidables[_i] = arguments[_i];
        }
        hidables.forEach(function (o) { return o.classList.toggle('hidden'); });
    };
    CardViewPage.prototype.getPrettyStatusColor = function (value) { return __WEBPACK_IMPORTED_MODULE_2__app_models__["a" /* CardModel */].LOOKUP_STATUS[value].color; };
    CardViewPage.prototype.getPrettyStatus = function (value) { return __WEBPACK_IMPORTED_MODULE_2__app_models__["a" /* CardModel */].LOOKUP_STATUS[value].text; };
    CardViewPage.prototype.getColorClass = function () {
        if (this.card.isTrap)
            return "trap";
        if (this.card.isGrand)
            return "grand";
        if (this.card.isSneak)
            return "sneak";
        return "normal";
    };
    CardViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-card-view',template:/*ion-inline-start:"C:\Projects Temp\ccgu-admin-tool\src\pages\card-view\card-view.html"*/'<ion-content padding [class]="getColorClass()+\' pad\'">\n\n\n\n  <ion-input type="text" class="slug" [(ngModel)]="card.properties.slug"></ion-input>\n\n\n\n  <ion-grid no-padding #hidablePower class="power-options hidable" [class.hidden]="true">\n\n    <ion-row>\n\n      <ion-col col-2><button ion-button clear large full (click)="toggle(hidablePower);card.setIsTrapType(true)">Trap</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower( 1);toggle(hidablePower)"> 1</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower( 2);toggle(hidablePower)"> 2</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower( 3);toggle(hidablePower)"> 3</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower( 4);toggle(hidablePower)"> 4</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower( 5);toggle(hidablePower)"> 5</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower( 6);toggle(hidablePower)"> 6</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower( 7);toggle(hidablePower)"> 7</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower( 8);toggle(hidablePower)"> 8</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower( 9);toggle(hidablePower)"> 9</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower(10);toggle(hidablePower)">10</button></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-2><button ion-button clear large full (click)="setPower( 0);toggle(hidablePower)"> 0</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower(11);toggle(hidablePower)">11</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower(12);toggle(hidablePower)">12</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower(13);toggle(hidablePower)">13</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower(14);toggle(hidablePower)">14</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower(15);toggle(hidablePower)">15</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower(16);toggle(hidablePower)">16</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower(17);toggle(hidablePower)">17</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower(18);toggle(hidablePower)">18</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower(19);toggle(hidablePower)">19</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPower(20);toggle(hidablePower)">20</button></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-input type="text" class="name" [(ngModel)]="card.properties.name"></ion-input>\n\n    \n\n  <ion-textarea [(ngModel)]="card.properties.description"></ion-textarea>\n\n\n\n  <ion-grid no-padding grid-padding-width="1px" class="tags">\n\n      <ion-row>\n\n        <ion-col no-padding *ngFor="let tag of tags">\n\n          <button ion-button mini class="tag-button" \n\n                  [outline]="card.properties.tags.indexOf(tag)<0"\n\n                  (click)="card.toggleTag(tag)">{{tag}}</button>\n\n        </ion-col>\n\n      </ion-row>\n\n  </ion-grid>\n\n\n\n  <div ion-item full #buttonStatus\n\n          color="devstatus-{{card.properties.status}}"\n\n          class="status-button status-label hidable" \n\n          [class.hidden]="false" \n\n          (click)="toggle(hidableStatus)"\n\n          style="text-align:center;color:black;"\n\n           >{{getPrettyStatus(card.properties.status)}}</div>\n\n  \n\n  <ion-grid no-padding #hidableStatus class="status-options hidable" [class.hidden]="true">\n\n    <ion-row>\n\n      <ion-col col-2><div ion-item class="status-label" color="devstatus-0" (click)="setStatus(0);toggle(hidableStatus);" >{{getPrettyStatus(0)}}</div></ion-col>\n\n      <ion-col col-2><div ion-item class="status-label" color="devstatus-1" (click)="setStatus(1);toggle(hidableStatus);" >{{getPrettyStatus(1)}}</div></ion-col>\n\n      <ion-col col-2><div ion-item class="status-label" color="devstatus-2" (click)="setStatus(2);toggle(hidableStatus);" >{{getPrettyStatus(2)}}</div></ion-col>\n\n      <ion-col col-2><div ion-item class="status-label" color="devstatus-3" (click)="setStatus(3);toggle(hidableStatus);" >{{getPrettyStatus(3)}}</div></ion-col>\n\n      <ion-col col-2><div ion-item class="status-label" color="devstatus-4" (click)="setStatus(4);toggle(hidableStatus);" >{{getPrettyStatus(4)}}</div></ion-col>\n\n      <ion-col col-2><div ion-item class="status-label" color="devstatus-5" (click)="setStatus(5);toggle(hidableStatus);" >{{getPrettyStatus(5)}}</div></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-2><div ion-item class="status-label" color="devstatus-6"  (click)="setStatus(6);toggle(hidableStatus);" >{{getPrettyStatus(6)}}</div></ion-col>\n\n      <ion-col col-2><div ion-item class="status-label" color="devstatus-7"  (click)="setStatus(7);toggle(hidableStatus);" >{{getPrettyStatus(7)}}</div></ion-col>\n\n      <ion-col col-2><div ion-item class="status-label" color="devstatus-8"  (click)="setStatus(8);toggle(hidableStatus);" >{{getPrettyStatus(8)}}</div></ion-col>\n\n      <ion-col col-2><div ion-item class="status-label" color="devstatus-9"  (click)="setStatus(9);toggle(hidableStatus);" >{{getPrettyStatus(9)}}</div></ion-col>\n\n      <ion-col col-2><div ion-item class="status-label" color="devstatus-10" (click)="setStatus(10);toggle(hidableStatus);">{{getPrettyStatus(10)}}</div></ion-col>\n\n      <ion-col col-2><div ion-item class="status-label" color="devstatus-11" (click)="setStatus(11);toggle(hidableStatus);">{{getPrettyStatus(11)}}</div></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n    \n\n  <ion-grid no-padding #hidablePriority class="priority-options hidable" [class.hidden]="false">\n\n    <ion-row>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 0 > card.properties.priority" (click)="setPriority(0);" >➖</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 1 > card.properties.priority" (click)="setPriority(1);" >🖤</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 2 > card.properties.priority" (click)="setPriority(2);" >🖤</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 3 > card.properties.priority" (click)="setPriority(3);" >💚</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 4 > card.properties.priority" (click)="setPriority(4);" >💚</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 5 > card.properties.priority" (click)="setPriority(5);" >💙</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 6 > card.properties.priority" (click)="setPriority(6);" >💙</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 7 > card.properties.priority" (click)="setPriority(7);" >💜</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 8 > card.properties.priority" (click)="setPriority(8);" >💜</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 9 > card.properties.priority" (click)="setPriority(9);" >🧡</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]="10 > card.properties.priority" (click)="setPriority(10);">🧡</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setPriority(-1); setStatus(12);">✖</button></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid no-padding #hidableRarity class="rarity-options hidable" [class.hidden]="false">\n\n    <ion-row>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 0 > card.properties.rarity" (click)="setRarity(0);" >➖</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 1 > card.properties.rarity" (click)="setRarity(1);" >⭐</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 2 > card.properties.rarity" (click)="setRarity(2);" >⭐</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 3 > card.properties.rarity" (click)="setRarity(3);" >⭐</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 4 > card.properties.rarity" (click)="setRarity(4);" >⭐</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 5 > card.properties.rarity" (click)="setRarity(5);" >⭐</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 6 > card.properties.rarity" (click)="setRarity(6);" >⭐</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 7 > card.properties.rarity" (click)="setRarity(7);" >⭐</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 8 > card.properties.rarity" (click)="setRarity(8);" >⭐</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]=" 9 > card.properties.rarity" (click)="setRarity(9);" >⭐</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full [class.faded]="10 > card.properties.rarity" (click)="setRarity(10);">⭐</button></ion-col>\n\n      <ion-col col-1><button ion-button clear large full (click)="setRarity(-1);">✖</button></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  \n\n\n\n  <ion-fab top left class="power-fab">\n\n    <button ion-fab large color="primary" (click)="hidablePower.classList.toggle(\'hidden\')"  color="light">\n\n        {{card.isTrap?"🤐":card.prettyPower}}\n\n    </button>\n\n  </ion-fab>\n\n\n\n  <ion-fab bottom right>\n\n    <button ion-fab large color="primary"><ion-icon name="more"></ion-icon></button>\n\n    <ion-fab-list side="left">\n\n        <button ion-fab large color="primary" (click)="delete()"><ion-icon name="trash"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n  \n\n  <ion-fab top right>\n\n    <button ion-fab large color="primary" (click)="save()">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Projects Temp\ccgu-admin-tool\src\pages\card-view\card-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CardViewPage);
    return CardViewPage;
}());

//# sourceMappingURL=card-view.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardModel; });
/* unused harmony export StatusViewProperties */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CardType; });
/* unused harmony export CardData */
/* unused harmony export PDCharacterData */
/* unused harmony export DeckData */
/* unused harmony export CardSectionData */
/* unused harmony export CardSubSectionData */
var CardModel = (function () {
    function CardModel(data) {
        this.properties = new CardData();
        this.properties = data;
    }
    CardModel.makeFromData = function (data) { return new CardModel(data); };
    CardModel.makeClean = function (id) { return new CardModel({ id: id, slug: "", type: CardType.Unit }); };
    CardModel.prototype.setID = function (value) { this.properties.id = value; };
    CardModel.prototype.setPDC = function (pdc) {
        this.properties.pdc = pdc ? pdc.guid : null;
        this.properties.name = pdc ? pdc.name : null;
    };
    CardModel.prototype.toggleTag = function (tag) {
        var i = this.properties.tags.indexOf(tag);
        if (i < 0)
            this.properties.tags.unshift(tag);
        else
            this.properties.tags.splice(i, 1);
    };
    CardModel.prototype.setIsTrapType = function (value) { this.properties.type = value ? CardType.Trap : CardType.Unit; };
    Object.defineProperty(CardModel.prototype, "hasPDC", {
        get: function () { return (Boolean)(this.properties.pdc); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardModel.prototype, "hasName", {
        get: function () { return (Boolean)(this.properties.name); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardModel.prototype, "ID", {
        get: function () { return this.properties.id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardModel.prototype, "prettyName", {
        get: function () { return this.hasName ? this.properties.name : this.prettySlug; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardModel.prototype, "prettySlug", {
        get: function () { return this.properties.slug ? this.properties.slug : "-"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardModel.prototype, "prettyDescription", {
        get: function () { return this.properties.description; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardModel.prototype, "prettyPower", {
        get: function () { return this.properties.power > -1 ? String(this.properties.power) : '?'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardModel.prototype, "isUnit", {
        get: function () { return this.properties.type == CardType.Unit; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardModel.prototype, "isTrap", {
        get: function () { return this.properties.type == CardType.Trap; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardModel.prototype, "isGrand", {
        get: function () { return this.properties.tags.indexOf("grand") > -1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardModel.prototype, "isSneak", {
        get: function () { return this.properties.tags.indexOf("sneak") > -1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardModel.prototype, "prettyStatus", {
        get: function () { return CardModel.LOOKUP_STATUS[this.properties.status].text; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardModel.prototype, "prettyStatusColor", {
        get: function () { return CardModel.LOOKUP_STATUS[this.properties.status].color; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardModel.prototype, "practicallyNull", {
        get: function () {
            return !this.properties.slug &&
                (!this.properties.description || this.properties.description.length < 10);
        },
        enumerable: true,
        configurable: true
    });
    CardModel.LOOKUP_STATUS = [
        { text: "Draft", color: "none" },
        { text: "Concept", color: "none" },
        { text: "Unimplemented", color: "#E33" },
        { text: "Unfinished", color: "#FF0" },
        { text: "Untested", color: "#AF0" },
        { text: "Alpha", color: "#CAD" },
        { text: "Beta", color: "#BBD" },
        { text: "NoArt", color: "#0BF" },
        { text: "Unpolished", color: "#2DF" },
        { text: "Ready", color: "#FFF" },
        { text: "Published", color: "none" },
        { text: "Retired", color: "none" },
        { text: "Skip", color: "#888" },
    ];
    return CardModel;
}());

var StatusViewProperties = (function () {
    function StatusViewProperties() {
    }
    return StatusViewProperties;
}());

var CardType;
(function (CardType) {
    CardType[CardType["Unit"] = 0] = "Unit";
    CardType[CardType["Trap"] = 1] = "Trap";
})(CardType || (CardType = {}));
/// -> JSON
var CardData = (function () {
    function CardData() {
        this.id = 0;
        this.type = CardType.Unit;
        this.name = "";
        this.power = 0;
        this.description = "";
        this.tags = [];
        this.rarity = 0;
        this.c = '';
        this.pdc = null;
        this.status = 0;
        this.priority = 0;
    }
    return CardData;
}());

var PDCharacterData = (function () {
    function PDCharacterData() {
    }
    return PDCharacterData;
}());

var DeckData = (function () {
    function DeckData() {
    }
    return DeckData;
}());

var CardSectionData = (function () {
    function CardSectionData() {
        this.subsections = [
            { funcIndex: 0, header: "Le Section One" },
            { funcIndex: 0, header: "Le Section Two" },
            { funcIndex: 0, header: "Le Section Three" },
            { funcIndex: 0, header: "Le Section Four" },
        ];
    }
    return CardSectionData;
}());

var CardSubSectionData = (function () {
    function CardSubSectionData() {
    }
    return CardSubSectionData;
}());

//# sourceMappingURL=models.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map