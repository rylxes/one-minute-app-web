import React, {useEffect, useState} from "react";
import * as _ from "underscore";


const VoteResult = ({poll}) => {

    const [optionValues, setOptionValues] = useState([]);
    const [sum, setSum] = useState(0);
    useEffect(() => {
        calculate(poll);
    }, [])

    const calculate = (poll) => {
        let options = [];
        let sum = 0;


        poll.pollCounters.forEach((each) => {

            let res = _.first(each.counters)

            let opt = {
                'name': each.name,
                'value': each.value,
                'count': res?.pivot?.value || 0,
            }

            sum += opt.count;
            options = [...options, opt]
        })


        options.forEach((each) => {
            let perc = (each.count / sum) * 100 || 0;
            each.perc = perc;
        })


        //console.log(options)
        setOptionValues(options)
        setSum(sum)

    }


    return (

        <>
            <div className="summary">
                <div className="votes"><i className="las la-poll"></i> <span>{poll?.counters?.value || 0}</span></div>

                {poll?.pollType?.id === 1 && <>
                    <div className="results">
                        {optionValues.map((eachValue, key) => (<span title="Lagos" className="options agree"
                                                                     key={key}><i
                            className={eachValue?.name}> {eachValue?.name} </i> {eachValue?.perc}%</span>))}
                    </div>
                </>}


                {poll?.pollType?.id === 2 && <>
                    <div className="results">
                        {optionValues.map((eachValue, key) => (<span title="Lagos" className="options"
                                                                     key={key}><em>{eachValue?.name}</em> {eachValue?.perc}</span>))}
                    </div>
                </>}


                {poll?.pollType?.id === 3 && <>
                    <div className="results">
                        {optionValues.map((eachValue, key) => (<span title="Lagos" className="options"
                                                                     key={key}><em>{eachValue?.name}</em> {eachValue?.perc}</span>))}
                    </div>
                </>}
            </div>

        </>

    )
}
export default VoteResult
