export class ObjectUtils {
    static filterBySuffix<T>(obj: Record<string, T>, suffix: string): T[]{
        return Object.keys(obj)
            .filter(key => key.endsWith(suffix))
            .map(key => obj[key]);
    }

    static getModuleList(moduels: Record<string, any>): any[]{
        return this.filterBySuffix(moduels, 'Module');
    }
}