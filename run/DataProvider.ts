import { Config } from "../Config";

export interface DataProvider {

    get(src: string, path: string, _default: any  ): object;

}


enum BaseSrc {
    config

}

export class BaseDataProvider implements DataProvider {

    _config: Config;

    constructor(c: Config) {
        this._config = c;
    }

    get(src: string, path: string, _default: any ): object {
        if (BaseSrc.config.toString() == src) return this._config.get(path, _default);
        return null;
    }

    get config(): Config { return this._config; }


}