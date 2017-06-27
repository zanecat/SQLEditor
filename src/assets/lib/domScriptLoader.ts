export class DomScriptLoader {
    static addScript(url: string, id: string, onLoadAction: () => any) {
        var sc = document.getElementById(id);
        if (sc !== null) {
            return;
        }
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.id = id;
        if (onLoadAction !== null) {
            script.addEventListener('load', onLoadAction);
        }
        document.body.appendChild(script);
    }
}