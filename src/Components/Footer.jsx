import React from "react";
import Date from "./Date";
const date = Date()


function Footer (){
    return (
        <div className="Ending">
            <h1>As Featured In</h1>
            <div className="logos">
            <a href="https://techcabal.com/2024/07/18/piggyvest-named-among-worlds-top-250-fintech-companies-by-cnbc/"  rel="noreferrer" style={{opacity : "1", visibility: "inherit"}}><img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/tclogo_2x_e3771e8b17/tclogo_2x_e3771e8b17.png" alt="brand"/></a>
            <a href="https://www.cnbc.com/the-worlds-top-250-fintech-companies-2024/"  rel="noreferrer" style={{opacity : "1", visibility: "inherit"}}><img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/output_9290be116f/output_9290be116f.png" alt="brand"/></a>
            <a href="https://techcrunch.com/2018/05/31/nigerias-piggybank-ng-raises-1-1m-announces-group-investment-product/"  rel="noreferrer" style={{opacity : "1", visibility: "inherit"}}><img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/brand1_b2a9805fff/brand1_b2a9805fff.png" alt="brand"/></a>
            <a href="https://www.pymnts.com/digital-first-banking/2022/piggyvest-seeks-to-boost-consumer-savings-and-investment-in-nigerias-low-trust-environment/"  rel="noreferrer" style={{opacity : "1", visibility: "inherit"}}><img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/pym_removebg_preview_109a666426/pym_removebg_preview_109a666426.svg" alt="brand"/></a>
            </div>
            <p> Copywrite Marvelous Inc {date}</p>
        </div>
    )
}

export default Footer