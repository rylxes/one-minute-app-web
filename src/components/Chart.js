import React, {useEffect, useState} from 'react'


const ChartPoll = ({poll, pollOptions}) => {

    useEffect(() => {

    }, [])


    return (
        <>
        <div class="poll-canvas-wrap canvas-bordered">
        <h4>Yes / No Bar Chart </h4>
        <div class="poll-canvas tf-bar-canvas">
            <div class="boundary">
                <div class="bars" data-total-votes="1221">
                    <div id="bar" class="true-bar bar" data-poll="341" data-size="27.9" title="341 Yes Votes"></div>		
                    <div id="fbar" class="false-bar bar" data-poll="880" data-size="72.1" title="880 No Votes"></div>
                </div>					
            </div>
            <div class="labels">
                <div class="true-label label">
                    <p>Yes</p>
                </div>
                <div class="false-label label">
                    <p>No</p>
                </div>
            </div>
            
        </div>
        <div class="tf-bar-legend">
            <p><strong>Total Views:</strong> 11,688</p>
            <p><strong>Total Votes:</strong> 1,221</p>
        </div>
    </div>
   
    <div class="poll-canvas-wrap canvas-bordered">
    <h4> 5 Star Rating Chart </h4>
        <div class="poll-canvas fsh-bar-canvas">
            <div class="h-boundary">
                <div data-rate="5" class="rate-item"><span>5 Star</span></div>
                <div data-rate="4" class="rate-item"><span>4 Star</span></div>
                <div data-rate="3" class="rate-item"><span>3 Star</span></div>
                <div data-rate="2" class="rate-item"><span>2 Star</span></div>
                <div data-rate="1" class="rate-item"><span>1 Star</span></div>
            </div>
            <div data-total-votes="8657" class="rate-bars">
                <div class="fs-hbar"><div data-votes="677" data-poll="7.8" class="hbar" title="677 5 Star Votes"></div></div>
                <div class="fs-hbar"><div data-votes="1345" data-poll="15.5" class="hbar" title="1345 4 Star Votes"></div></div>
                <div class="fs-hbar"><div data-votes="3456" data-poll="40"  class="hbar" title="3456 3 Star Votes"></div></div>
                <div class="fs-hbar"><div data-votes="2788" data-poll="32.2" class="hbar" title="2788 2 Star Votes"></div></div>
                <div class="fs-hbar"><div data-votes="391" data-poll="4.5" class="hbar" title="391 1 Star Votes"></div></div>
            </div>
        </div>
        <div class="tf-bar-legend">
            <p><strong>Total Views:</strong> 123,941</p>
            <p><strong>Total Votes:</strong> 8,657</p>
        </div>
    </div>
   
    <div class="poll-canvas-wrap canvas-bordered">
    <h4> A - E Options Chart  </h4>
        <div class="poll-canvas fsv-bar-canvas">
            <div class="v-boundary">
                <div data-total-votes="14411" class="v-bars">
                    <div class="fs-vbar"><div data-votes="1456" data-poll="10.1" class="vbar color-1" title="1456 Votes"></div></div>
                    <div class="fs-vbar"><div data-votes="8654" data-poll="60" class="vbar color-2" title="8654 Votes"></div></div>
                    <div class="fs-vbar"><div data-votes="2287" data-poll="15.9"  class="vbar color-3" title="2287 Votes"></div></div>
                    <div class="fs-vbar"><div data-votes="890" data-poll="6.2" class="vbar color-4" title="890 Votes"></div></div>
                    <div class="fs-vbar"><div data-votes="1124" data-poll="7.8" class="vbar color-5" title="1124 Votes"></div></div>
                </div>
            </div>
            <div class="v-boundary-base">
                <div class="rate-item"><span>A</span></div>
                <div class="rate-item"><span>B</span></div>
                <div class="rate-item"><span>C</span></div>
                <div class="rate-item"><span>D</span></div>
                <div class="rate-item"><span>E</span></div>
            </div>							
        </div>
        <div class="tf-bar-legend tv-bar">
            <p class="color-1" title="1456 Votes"><strong>A - </strong> Mind my business</p>
            <p class="color-2" title="8654 Votes"><strong>B - </strong> Tell her the truth</p>
            <p class="color-3" title="2287 Votes"><strong>C - </strong> Tell her you heard rumours</p>
            <p class="color-4" title="890 Votes"><strong>D - </strong> Tell Him to change</p>
            <p class="color-5" title="1124 Votes"><strong>E - </strong> Leave the company</p>							
            <div class="decoration"></div>							
        </div>
        <div class="tf-bar-legend">
            <p><strong>Total Views:</strong> 62,300</p>
            <p><strong>Total Votes:</strong> 14,411</p>
        </div>
    </div>
   

        </>
    )
        ;
}

export default ChartPoll
