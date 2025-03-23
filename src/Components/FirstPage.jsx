import React from 'react'
import Button from './ButtonLayout'

function FirstPage (){
    return(
        <div className='firstPage'>
            <div className="introDiv">
            <h1>
            The Fastest Way to Process Cross Border Transactions
        </h1>
        <p>Fastalert helps over One Million Businesses in Day to Day Transactions across Different Borders</p>
        <div className='body_buttons'>
        <Button 
        class = 'customButtonStyle black' 
        text = "Get on Iphone"
        img = <img src="https://cdn-icons-png.flaticon.com/512/5969/5969047.png " width="256" height="256" alt="" title="" class="button_img" />
        />

        <Button 
        class = 'customButtonStyle black' 
        text = "Get on Android" 
        img = <img src="https://cdn-icons-png.flaticon.com/512/15465/15465738.png " width="256" height="256" alt="" title="" class="button_img" />
        />
        </div>
            </div>
        <div className='img_div'>
            <img className= "image"src="https://media.istockphoto.com/id/1189302240/photo/business-people-shaking-hands.jpg?s=612x612&w=0&k=20&c=siBm6bC7LohJN-M7hNPQvBiHzMgT_O5tjHbdA5ZoSqs=" alt="" />]

        <img class="headerIcon" alt="card-img" src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/Frame8011_00d37f1517/Frame8011_00d37f1517.png" style={{position: 'absolute',left:0,top:0}}></img>
        <img class="headerIcon" alt="card-img" src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/Frame178_37e909ae1c/Frame178_37e909ae1c.png" style={{position: 'absolute', height: "100px",bottom: 20,right:0}}></img>
        <img class="headerIcon" alt="card-img" src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/Frame3_1_4b13e4d5cb/Frame3_1_4b13e4d5cb.avif" style={{position: 'absolute', height: '80px',bottom: 200,right:0}}></img>
        <img class="headerIcon" alt="card-img" src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/card4_1_8df24b3ed8/card4_1_8df24b3ed8.avif" style={{position: 'absolute',bottom: 200,left:0}}></img>
        <img class="headerIcon" alt="card-img" src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/Frame5_1_4facd890fc/Frame5_1_4facd890fc.avif" style={{position: 'absolute',height: "80px",top: 20,right:0}}></img>
        <img class="headerIcon" alt="card-img" src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/housemoney_132c9f5043/housemoney_132c9f5043.svg" style={{position: 'absolute',bottom: 0,left:0}}></img>
        </div>
        </div>
    )
}
export default FirstPage