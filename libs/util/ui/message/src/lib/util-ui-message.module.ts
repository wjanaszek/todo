import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialMessageService } from './material/material-message.service';
import { MessageService } from './message.service';

@NgModule({
    imports: [CommonModule],
})
export class UtilUiMessageModule {
    static forRoot(
        messageService: Type<MessageService> = MaterialMessageService
    ): ModuleWithProviders<UtilUiMessageModule> {
        return {
            ngModule: UtilUiMessageModule,
            providers: [
                {
                    provide: MessageService,
                    useClass: messageService,
                },
            ],
        };
    }
}
