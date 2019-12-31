import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Quote from './Quote'
import Button from '@material-ui/core/Button'
import aiki2 from '../aiki2.png'
import options from './SearchList'

export default function Material (props) {

    const defaultProps = {
        options: options,
        getOptionLabel: option => option,
    }

    const [value, setValue] = React.useState(null)
    const [quoteList, setQuoteList] = React.useState([])  
    React.useEffect(() => {
        fetch(`api/quotes/random`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json'}
            })
            .then(res => res.json())
            .then(json => setQuoteList(json), console.log("list:",quoteList))
            .catch(function(e) {
            console.log(e) // “oh, no!”
            }
        )
    }, []);
    
    return(
        <>
            <div id='searchBar'>
                <Autocomplete
                    {...defaultProps}
                    id="controlled-demo"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        fetch(`api/quotes/search/${newValue}`, {
                            method: 'get',
                            headers: { 'Content-Type': 'application/json'}
                            })
                            .then(res => res.json())
                            .then(json => setQuoteList(json), console.log("list:",quoteList))
                            .catch(function(e) {
                            console.log(e) // “oh, no!”
                            }
                        )
                    }}
                    renderInput={params => (
                    <TextField {...params} label="Search..." margin="normal" fullWidth  style={{  width: 215, left:20, top:-20}} />
                    )}
                    
                />
                
                <Button 
                    style={{top:-61,left:-20, float:"right"}}
                    variant="outlined" 
                    onClick = {(e)=>{
                        e.preventDefault()
                        fetch(`api/quotes/random`, {
                            method: 'get',
                            headers: { 'Content-Type': 'application/json'}
                            })
                            .then(res => res.json())
                            .then(json => setQuoteList(json), console.log("list:",quoteList))
                            .catch(function(e) {
                            console.log(e) // “oh, no!”
                            }
                        )
                    }}
                >
                    Random
                </Button>
            </div>
            
            <div class='quoteList'>
                <img  style={{width:'100px', float:"right", paddingTop:'100px', marginRight:'-80px', opacity:'.5'}} src={aiki2} alt="Ai" />
                <div class='header'>
                    <sub style={{fontSize: 'calc(8px + 2vmin)'}}> Quotes by</sub> 
                    <br/> 
                    <span style={{fontSize: 'calc(18px + 2.4vmin)'}}>O Sensei, Morihei Ueshiba</span> 
                </div>
            
                {quoteList.length > 0 ? 
                    quoteList.map((quote)=>(
                        <Quote quote={quote} />))
                    :"" 
                }
            </div>
        </>
    )
}    
