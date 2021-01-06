import React, {Component} from 'react';

class ColorInput extends Component {

    handleChange = e => {
        document.body.style.backgroundColor = e.target.value;
        if (e.target.value.length !== 7) {
            document.body.style.backgroundColor = '#fff';
        }
    }

    render() {
        return (
            <form>
                <input type="text" onChange={this.handleChange} placeholder="#lololo" className='color'/>
            </form>
        );
    }
}

export default ColorInput;
