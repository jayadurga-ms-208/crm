import React from 'react';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import data from "./data";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from '../demo-code/tiny-bar-chart.txt';

const TinyBarChart = () => (
    <JumboDemoCard title={"Tiny Bar Chart"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
        <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip labelStyle={{color: 'black'}} itemStyle={{color: 'black'}} cursor={false}/>
                <Legend/>
                <defs>
                    <linearGradient x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6200EE" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#B819D2" stopOpacity={1}/>
                    </linearGradient>
                </defs>
                <defs>
                    <linearGradient x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1ABBDE" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#09BCA7" stopOpacity={1}/>
                    </linearGradient>
                </defs>
                <Bar dataKey="pv" fill={"#1e88e5"}/>
                <Bar dataKey="uv" fill={"#304995"}/>
            </BarChart>
        </ResponsiveContainer>
    </JumboDemoCard>
);

export default TinyBarChart;
