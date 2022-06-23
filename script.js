const Html = document.getElementById('html');
const Css = document.getElementById('css');
const Js = document.getElementById('js');

const preview = document.getElementById('preview');

const live = () =>{
    document.body.onkeyup = function (){
       try{
        preview.contentDocument.body.innerHTML =(Html.value + "<style>" + Css.value + "</style>");
        preview.contentWindow.eval(Js.value)
        }
        catch(err){
            preview.contentDocument.body.innerHTML =    `${err}`;
        }
    }
}
console.log(preview.contentWindow)
live();

// const Html = document.getElementById("html");
// const Css = document.getElementById("css");
// const Javascript = document.getElementById("javascript");
// const editor = document.getElementById("code-output");

// const compile = () =>{
//     document.body.onkeyup = function(){
//         try{
//             editor.contentDocument.body.innerHTML = Html.value + "<style>" + Css.value + "</style>";
//             editor.contentWindow.eval(Javascript.value);
//         }
//         catch(err){
//             editor.contentDocument.body.innerHTML = `${err}`;
//         }
//     }
// }
// console.log(editor.contentWindow);

// compile();