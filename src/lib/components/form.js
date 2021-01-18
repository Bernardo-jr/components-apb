import React from 'react';
import  './form.css';
class FormAPB extends React.Component{

    constructor(props){
        super(props);
        this.state={
            form:{}
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleClick=this.handleClick.bind(this);

    }
    componentDidMount() {
        this.props.formComponents.forEach(e => {
            var aux = this.state.form;
            aux[e.label]='';
            this.setState({form:aux});
        });
        console.log(this.state);
    }

    handleChange(e,l){
        var aux = this.state.form;
            aux[l]=e.target.value;
            this.setState({form:aux});
    }

    handleSubmit(e,callback){
        e.preventDefault();
        callback(this.state.form);
    }

    handleClick(e,callback,params){
        if(callback===null){
            this.props.formComponents.forEach(e => {
                var aux = this.state.form;
                aux[e.label]='';
                this.setState({form:aux});
            });
            document.getElementById("form").reset();
        }else{
            if(params===null){
                callback();
            }else{
            let args=[];
            params.forEach(e=>args[e]=this.state.form[e]);
            callback(args);
            }
        }
    }

    render(){
        return(
            <form id="form">
                {
                    this.props.formComponents.map((element,key)=> {
                   return <div key={key}>
                    <label className={element.labelClass}>
                        {element.label}:  
                        </label>
                        {(element.etiqueta==="select")
                        ?
                        <select className={element.class} defaultValue="X" onChange={(evt) => this.handleChange(evt,element.label)}>
                            <option value="X" disabled>Sexo</option>
                            {
                            element.options.map((opt,key)=> {
                             return <option key={key} value={opt.value}>{opt.label}</option>
                            })
                            }
                        </select>
                        :
                        <input className={element.class} type={element.type} onChange={(evt) => this.handleChange(evt,element.label)} />                      
                        }
                   </div>
                    })
                }
                <div className="row">
                {
                    this.props.buttons.map((button,key)=>{
                        return (button.submit)
                        ? <button key={key} className={button.class} type={button.type} onClick={(evt) => this.handleSubmit(evt,button.callback)} >{button.label}</button>
                        : <button key={key} className={button.class} type={button.type} onClick={(evt) => this.handleClick(evt,button.callback,button.callbackParams)} >{button.label}</button>
                    })
                }
                </div>
            </form>
        );
    }
}
export default FormAPB;