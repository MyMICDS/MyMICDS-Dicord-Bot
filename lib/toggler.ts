export class Toggler {
        static toggleBoolean(bool : boolean) : boolean {
                let out : boolean = false;
                
                if (bool) {
                        out = false;
                }
                else {
                        out = true;
                }
                
                return out;
        }
}