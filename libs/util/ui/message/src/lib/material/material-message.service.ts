import { Injectable } from '@angular/core';
import { MessageService } from '@janaszek/util/ui/message';

// @Injectable()
export class MaterialMessageService extends MessageService {
    error(): void {}

    success(): void {}

    warning(): void {}
}
