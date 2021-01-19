# component-apb
Componentes APB para no renegar.
## Installation
Run the following command:
`npm install componentes-apb`

### FormAPB

```javascript

import './App.css';
import {FormAPB} from 'componente-apb';

function App() {
  //form => variable con la cual se generan los campos del formulario  
var form=[
    {
      etiqueta:"input", type:"text",label:"Text",
      labelClass:"labelDefault",class:"default",
    },
    { 
      etiqueta:"input", type:"password",label:"Password",
      labelClass:"labelDefault",class:"default"
    },
    {
      etiqueta:"input", type:"checkbox",label:"checkbox",
      labelClass:"checkDefault",class:"checkDefault",
    },
    {
      etiqueta:"input", type:"radio",label:"radio",name:"radiogroup",
      options:[
        {
          id:"opt1",label : "opcion 1",value:"1",
          labelClass:"optDefault",class:"labelDefault"
        },
        {
          id:"opt1",label : "opcion 2",value:"2",
          labelClass:"optDefault",class:"labelDefault"
        },
        {
          id:"opt1",label : "opcion 3",value:"3",
          labelClass:"optDefault",class:"labelDefault"
        },
      ],
      labelClass:"labelDefault",class:"default",
    },
    {
      etiqueta:"select",label:"Select",
      options:[
        {value:"M",label:"Masculino"},
        {value:"F",label:"Femenino"},
        {value:"O",label:"Otro"}
      ],
      labelClass:"labelDefault",class:"default",
    },
  ];
  
  var handleSubmit=(f)=>{
    alert(JSON.stringify(f));
  }
   //ejemplo de funcion generica.
   //los nombres de los parametros deben corresponder a los label de cada elemento del form que se quiere recuperar
  var voidFunction=(args)=>{
    alert(args["nombre"]+" "+args["apellido"]+" ✓");
  }

  //buttons => variable con la cual se generan botones del formulario  
  //callbackParams:array[string] => se deben listar las propiedades "label" del array de formulario.
  var buttons=[
    {
      type:"submit",label:"Boton 1",class:"btnDefault",
      submit:true,callback:handleSubmit,callbackParams:null
    },
    {
      type:"button",label:"Boton 2",class:"btnDefault",
      submit:false,callback:voidFunction,callbackParams:["text","radio"]
    },
    {
      type:"button",label:"Boton 3",class:"btnDefault",
      submit:false,callback:null,callbackParams:null
    },
  ];

  
  return (
    <div className="App">
      <header className="App-header">
        <FormAPB formComponents={form} buttons={buttons}/>
      </header>
    </div>
  );
}

export default App;
```
