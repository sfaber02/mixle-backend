import React from "react";

const Eq = (props) => {
    const fx = props.fx;
    const handleSetFx = props.handleSetFx;

    return (
        <div id="eqContainer">
            <div id="eqBand1">
                <label>{fx.eq.band1.frequency}hz</label>
                <input
                    id="eq.band1.frequency"
                    type="range"
                    min="20"
                    max="500"
                    step="10"
                    value={fx.eq.band1.frequency}
                    onChange={handleSetFx}
                />
                <label>{fx.eq.band1.gain}db</label>
                <input
                    id="eq.band1.gain"
                    type="range"
                    min="-30"
                    max="30"
                    step="1"
                    value={fx.eq.band1.gain}
                    onChange={handleSetFx}
                />
            </div>
            <div id="eqBand2">
                <label>{fx.eq.band2.frequency}hz</label>
                <input
                    id="eq.band2.frequency"
                    type="range"
                    min="100"
                    max="700"
                    step="10"
                    value={fx.eq.band2.frequency}
                    onChange={handleSetFx}
                />
                <label>{fx.eq.band2.gain}db</label>
                <input
                    id="eq.band2.gain"
                    type="range"
                    min="-30"
                    max="30"
                    step="1"
                    value={fx.eq.band2.gain}
                    onChange={handleSetFx}
                />
            </div>
            <div id="eqBand3">
                <label>{fx.eq.band3.frequency}hz</label>
                <input
                    id="eq.band3.frequency"
                    type="range"
                    min="600"
                    max="1500"
                    step="10"
                    value={fx.eq.band3.frequency}
                    onChange={handleSetFx}
                />
                <label>{fx.eq.band3.gain}db</label>
                <input
                    id="eq.band3.gain"
                    type="range"
                    min="-30"
                    max="30"
                    step="1"
                    value={fx.eq.band3.gain}
                    onChange={handleSetFx}
                />
            </div>
            <div id="eqBand4">
                <label>{fx.eq.band4.frequency}hz</label>
                <input
                    id="eq.band4.frequency"
                    type="range"
                    min="1500"
                    max="5000"
                    step="10"
                    value={fx.eq.band4.frequency}
                    onChange={handleSetFx}
                />
                <label>{fx.eq.band4.gain}db</label>
                <input
                    id="eq.band4.gain"
                    type="range"
                    min="-30"
                    max="30"
                    step="1"
                    value={fx.eq.band4.gain}
                    onChange={handleSetFx}
                />
            </div>
            <div id="eqBand5">
                <label>{fx.eq.band5.frequency}hz</label>
                <input
                    id="eq.band5.frequency"
                    type="range"
                    min="4000"
                    max="10000"
                    step="10"
                    value={fx.eq.band5.frequency}
                    onChange={handleSetFx}
                />
                <label>{fx.eq.band5.gain}db</label>
                <input
                    id="eq.band5.gain"
                    type="range"
                    min="-30"
                    max="30"
                    step="1"
                    value={fx.eq.band5.gain}
                    onChange={handleSetFx}
                />
            </div>
        </div>
    );
};

export { Eq };