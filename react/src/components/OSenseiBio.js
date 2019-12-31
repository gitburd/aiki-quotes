import React, {Component} from 'react'
import ueshiba from '../ueshiba.png'

export class Bio extends Component {
    render() {
        return (
            <div className="bio">
                 <img  style={{width:'40%', float:'left', paddingRight:'15px' }} src={ueshiba} alt="Morihei Ueshiba" />
                <span>
               <span style={{fontSize:'34px', fontWeight:'bold'}}>M</span>orihei Ueshiba known as O Sensei (Great Teacher) was an extrodianry martial artist and practiced many of the traditional Japanese fighting arts; his personal philosophy was greatly influnced by Shinto and Buddhism. O Sensei developed Aikido as a synthesis of his martial studies, philosophy and spirituality. The martial goal of Aikio is to offer practitioners techniques to defend themselves while also protecting their attackers from injury. O Sensei spoke of a profound revilation in a garden after he, unarmed defeated a naval officer armed with a bokken without hurting the officer, 
                </span>
                <div style={{padding:'25px'}}>
                    "I felt the universe suddenly quake, and that a golden spirit sprang up from the ground, veiled my body, and changed my body into a golden one. At the same time my body became light. I was able to understand the whispering of the birds, and was clearly aware of the mind of God, the creator of the universe. At that moment I was enlightened: the source of budō is God's love – the spirit of loving protection for all beings ...
                        
                    Budō is not the felling of an opponent by force; nor is it a tool to lead the world to destruction with arms. True Budō is to accept the spirit of the universe, keep the peace of the world, correctly produce, protect and cultivate all beings in nature."

                </div>
                <div>
                Harmony and Peace are cetral themes in Aikido philosophy; Aikido is often refferd to as The Art of Peace or The Way of Harmonious Spirit. 
                </div>
                <div style={{paddingTop:'30px', fontSize:'12px'}}>
                thank you <a href="https://www.penguinrandomhouse.com/books/181498/the-art-of-peace-by-morihei-ueshiba-translated-by-john-stevens/" target="_blank">The Art of Peace</a> and <a target = "_blank" href="https://en.wikipedia.org/wiki/Morihei_Ueshiba">wikipedia</a>
                </div>


            </div>
            
        )
      }
}
export default Bio