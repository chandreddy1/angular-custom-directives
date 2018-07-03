import { Component } from '@angular/core';
import { StylesCompileDependency } from '@angular/compiler';

@Component({
    selector:'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color:white;
        }
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: String = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
    }
    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus === 'online' ?'green':'red';
    }
}