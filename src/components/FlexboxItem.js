import React from 'react';
import PropTypes from 'prop-types';
import funbox_logo from '../Assets/img/funbox_logo.png'
class FlexboxItem extends React.Component {
 

    constructor(props, context) {
        super(props, context);
        let available=this.props.data.available;
        this.state= (available)?{statement:"default" }:{statement:"disabled" };
    }

    selectedClick(e) {
        e.preventDefault();
        if (this.state.statement==="disabled") return;

        if(this.state.statement==="default"){
            this.setState(
              {
                  statement:"selected"
              });
            this.props.data.count_hover_selected=0;
        }
        else{
           this.setState(
              {
                  statement:"default"
              });
        }
     }

    render() {
      let describe=this.props.data.describe,
          brand=this.props.data.brand,
          taste=this.props.data.taste,
          servings=this.props.data.servings,
          bonus=this.props.data.bonus,
          weight=this.props.data.weight,
          statement=this.state.statement,
          hover=this.state.hover,
          veil,
          slogan,
          slogan_target="",
          font_color,
          font_color_describe,
          border,
          circle,
          opacity,
          styles_disabled = {
            font_color_item:{color:"rgba(114,114,114,0.5)"},
            font_color_describe:{color:"rgba(114,114,114,0.5)"},
            font_color:{color:"#d0d053"},
            border:{background: "linear-gradient(135deg, transparent 30px, #b7b7b7 0)"},
            circle:{ backgroundColor:"#b3b3b3"},
            veil:{color:"rgba(114,114,114,0.5)"},
            opacity:{opacity:"0.5"},
          },
          styles_selected = {
            veil:{},
            opacity:{},
            font_color_describe:{color:"#000000"},
            font_color:{color:"#ffffff"},
            border: {background: "linear-gradient(135deg, transparent 30px, #d91667 0)"},
            circle:{ backgroundColor:"#d91667"}
          },
          styles_default = {
            veil:{},
            opacity:{},
            font_color_describe:{color:"#000000"},
            font_color:{color:"#ffffff"},
            border: {background: "linear-gradient(135deg, transparent 30px, #1698d9 0)"},
            circle:{ backgroundColor:"#1698d9"}
          },
          styles_selected_hover = {
            veil:{},
            opacity:{},
            font_color_describe:{color:"#e62e7a"},       
            border:{background: "linear-gradient(135deg, transparent 30px, #e62e7a 0)"},
            circle:{ backgroundColor:"#e62e7a"}
          },
          styles_default_hover = { 
            veil:{},
            opacity:{},
            font_color_describe:{color:"#000000"},     
            border: {background: "linear-gradient(135deg, transparent 30px, #2ea8e6 0)"},
            circle:{ backgroundColor:"#2ea8e6"}
          };

          switch (statement) {
            case 'disabled':
            {
              veil=styles_disabled.veil;
              opacity=styles_disabled.opacity;
              font_color_describe=styles_disabled.font_color_describe;
              slogan=this.props.data.slogan_disable;
              font_color=styles_disabled.font_color;
              border=styles_disabled.border;
              circle=styles_disabled.circle;
              break;
            }
            case 'default':
            { 
                if(!hover){
                  veil=styles_default.veil;
                  opacity=styles_default.opacity;
                  font_color_describe=styles_default.font_color_describe;
                  slogan=this.props.data.slogan_available;
                  slogan_target="купи";
                  border= styles_default.border;
                  circle=styles_default.circle; 
                }
                else{
                  veil=styles_default_hover.veil;
                  opacity=styles_default_hover.opacity;
                  font_color_describe=styles_default_hover.font_color_describe;
                  border=styles_default_hover.border;
                  circle=styles_default_hover.circle;
                  slogan=this.props.data.slogan_available;
                  slogan_target="купи";
                }      
                break;
            }
            
            case 'selected':
            { 
                if(!hover){
                  veil=styles_selected.veil;
                  opacity=styles_selected.opacity;
                  font_color_describe=styles_selected.font_color_describe;
                  slogan=this.props.data.slogan_selected;
                  font_color=styles_selected.font_color;
                  border=styles_selected.border;
                  circle=styles_selected.circle;
              } 
              else{
                if (this.props.data.count_hover_selected===0){
                  veil=styles_selected.veil;
                  opacity=styles_selected.opacity;
                  font_color_describe=styles_selected.font_color_describe;
                  slogan=this.props.data.slogan_selected;
                  font_color=styles_selected.font_color;
                  border=styles_selected.border;
                  circle=styles_selected.circle;
                }
                else{
                  veil=styles_selected_hover.veil;
                  opacity=styles_selected_hover.opacity;
                  font_color_describe=styles_selected_hover.font_color_describe;
                  describe=this.props.data.describe_hover;
                  slogan=this.props.data.slogan_selected;
                  font_color=styles_selected.font_color;
                  border=styles_selected_hover.border;
                  circle=styles_selected_hover.circle;
                }
              }
              break;
            }          
            default:
             break;
          }          
        return (       
          <div className="flexbox__item" onClick={this.selectedClick.bind(this)} 
            onMouseEnter={() => {this.setState({hover:true}); ++this.props.data.count_hover_selected}}
            onMouseLeave={() => this.setState({hover:false})} 
            style={border}>
             <div className="flexbox__item__inner">  
                <div className="flexbox__item__content">
                    <p className="h2"style={font_color_describe}>{describe}</p>
                    <h3 style={veil}>{brand}</h3>
                    <h4 style={veil}>{taste}</h4>
                    <p style={veil}>{servings} <br/>{bonus}</p>
                    <div className="flexbox__item__img">  
                      <img src={funbox_logo} style={opacity} alt={"cat"}/>
                    </div>
                    <div className="flexbox__item__weight" style={circle}>{weight}<span> кг</span>
                    </div>
                </div>          
                <div className="flexbox__item__tagline" style={font_color}>{slogan}<a href="#" onClick={this.selectedClick.bind(this)}>{slogan_target}</a></div> 
          </div>
        </div>          
        )
    }
}

FlexboxItem.propTypes = {
    data: PropTypes.shape({
        describe: PropTypes.string.isRequired,
        describe_hover:PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        taste: PropTypes.string.isRequired,
        servings: PropTypes.string.isRequired,
        bonus: PropTypes.string.isRequired,
        weight: PropTypes.string.isRequired,
        slogan_available: PropTypes.string.isRequired,
        slogan_disable: PropTypes.string.isRequired,
        slogan_selected: PropTypes.string.isRequired,
        available:PropTypes.bool.isRequired,
        hover:PropTypes.bool.isRequired,
        count_hover_selected:PropTypes.number.isRequired,        
    })
};

export default FlexboxItem;


        
       
        