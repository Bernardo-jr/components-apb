# component-apb
Componentes APB para no renegar.
## Installation
Run the following command:
`npm install componentes-apb`

### FormAPB

```javascript

import './App.css';
import FormAPB from './components/form';

function App() {
  //form => variable con la cual se generan los campos del formulario  
  var form=[
    {labelClass:"labelDefault",class:"default",etiqueta:"input", type:"text",label:"usuario"},
    {labelClass:"labelDefault",class:"default",etiqueta:"input", type:"password",label:"clave"},
    {labelClass:"labelDefault",class:"default",etiqueta:"input", type:"text",label:"nombre"},
    {labelClass:"labelDefault",class:"default",etiqueta:"input", type:"text",label:"apellido"},
    {labelClass:"labelDefault",class:"default",etiqueta:"input", type:"text",label:"direccion"},
    {labelClass:"labelDefault",class:"default",etiqueta:"input", type:"number",label:"telefono"},
    {labelClass:"labelDefault",class:"default",etiqueta:"input", type:"text",label:"mail"},
    {labelClass:"labelDefault",class:"default",etiqueta:"select",label:"Sexo",options:[{value:"M",label:"Masculino"},{value:"F",label:"Femenino"},{value:"O",label:"Otro"}]},
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
    {type:"submit",label:"Submit",class:"btnDefault",submit:true,callback:handleSubmit,callbackParams:null},
    {type:"button",label:"Validar",class:"btnDefault",submit:false,callback:voidFunction,callbackParams:["nombre","apellido"]},
    {type:"button",label:"Borrar",class:"btnDefault",submit:false,callback:null,callbackParams:null},
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
