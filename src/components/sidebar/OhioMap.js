import React from 'react';

// styling
import { makeStyles } from '@material-ui/core/styles';

// material ui components
import Tooltip from '@material-ui/core/Tooltip';

// other
import SVG from 'react-inlinesvg';
import OhioMapSVG from './OhioMap.svg'

const useStyles = makeStyles((theme) => ({
  mapWrapper: {
    padding: '11px 0px',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}));

function OhioMap(props) {
  const classes = useStyles();

  const getCountyData = (countyName) => {
    let countyData = props.allCountiesData.find((el) => 
      el.attributes.county === countyName
    )
    console.log("returning: ")
    console.log(countyData)
    return countyData
  }

  return (
    <div className={classes.mapWrapper}>

      <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 700 700" preserveAspectRatio="none">

        <g id="admin2">

          <g id="US">
            <desc xmlns="http://www.highcharts.com/svg/namespace">
              <name>United States of America</name>
              <labelrank>2</labelrank>
              <country-abbrev>U.S.A.</country-abbrev>
              <subregion>Northern America</subregion>
              <region-wb>North America</region-wb>
              <iso-a3>USA</iso-a3>
              <iso-a2>US</iso-a2>
              <woe-id>23424977</woe-id>
              <continent>North America</continent>
              <hc-key>us</hc-key>
              <hc-a2>US</hc-a2>
            </desc>
          </g>

          <g id="US.OH">
            <desc xmlns="http://www.highcharts.com/svg/namespace">
              <labelrank>0</labelrank>
              <hasc>US.OH</hasc>
              <alt-name>OH|Ohio</alt-name>
              <woe-id>2347594</woe-id>
              <subregion>East North Central</subregion>
              <fips>US39</fips>
              <postal-code>OH</postal-code>
              <name>Ohio</name>
              <country>United States of America</country>
              <type-en>State</type-en>
              <region>Midwest</region>
              <longitude>-82.67189999999999</longitude>
              <woe-name>Ohio</woe-name>
              <latitude>40.0924</latitude>
              <woe-label>Ohio, US, United States</woe-label>
              <type>State</type>
              <hc-key>us-oh</hc-key>
              <hc-a2>OH</hc-a2>
            </desc>
          </g>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Lake')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Lake County
                <br/>
                {getCountyData('Lake')?.attributes?.total} cases
                <br/>
                {getCountyData('Lake')?.attributes?.deaths} death{getCountyData('Lake')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Lake County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.085" d="M514.0,83.0 L499.8,83.1 L499.5,69.6 L519.8,51.8 L566.4,28.6 L569.8,27.8 L570.1,47.1 L570.1,53.9 L555.7,54.3 L556.1,68.4 L527.9,69.0 L527.9,82.8 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39085</fips>
                <name>Lake</name>
                <hc-middle-x>0.58</hc-middle-x>
                <hc-middle-y>0.43</hc-middle-y>
                <hc-key>us-oh-085</hc-key>
                <hc-a2>LA</hc-a2>
              </desc>
            </path>
          </Tooltip>
          
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Cuyahoga')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Cuyahoga County
                <br/>
                {getCountyData('Cuyahoga')?.attributes?.total} cases
                <br/>
                {getCountyData('Cuyahoga')?.attributes?.deaths} death{getCountyData('Cuyahoga')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Cuyahoga County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.035" d="M499.5,69.6 L499.8,83.1 L514.0,83.0 L514.2,111.3 L514.4,126.1 L484.1,125.9 L489.1,140.1 L471.6,140.4 L471.5,140.4 L471.5,140.4 L471.5,140.4 L456.7,140.7 L443.2,141.1 L443.2,126.3 L429.4,126.3 L429.7,96.1 L443.0,99.2 L454.4,95.6 L462.6,97.6 L472.9,92.7 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39035</fips>
                <name>Cuyahoga</name>
                <hc-middle-x>0.45</hc-middle-x>
                <hc-middle-y>0.70</hc-middle-y>
                <hc-key>us-oh-035</hc-key>
                <hc-a2>CU</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Medina')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Medina County
                <br/>
                {getCountyData('Medina')?.attributes?.total} cases
                <br/>
                {getCountyData('Medina')?.attributes?.deaths} death{getCountyData('Medina')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Medina County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.103" d="M471.5,167.9 L471.5,196.6 L450.8,196.8 L406.5,196.4 L400.0,196.4 L400.3,182.5 L400.4,168.2 L414.5,168.2 L414.7,155.9 L429.2,155.8 L429.3,141.2 L443.2,141.1 L456.7,140.7 L471.5,140.4 L471.5,140.4 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39103</fips>
                <name>Medina</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-103</hc-key>
                <hc-a2>ME</hc-a2>
              </desc>
            </path>
          </Tooltip>
          
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Summit')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Summit County
                <br/>
                {getCountyData('Summit')?.attributes?.total} cases
                <br/>
                {getCountyData('Summit')?.attributes?.deaths} death{getCountyData('Summit')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Summit County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.153" d="M471.5,167.9 L471.5,140.4 L489.1,140.1 L484.1,125.9 L514.4,126.1 L514.9,167.6 L515.1,196.1 L511.7,196.2 L511.3,212.1 L477.7,211.0 L477.6,196.5 L471.5,196.6 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39153</fips>
                <name>Summit</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-153</hc-key>
                <hc-a2>SU</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Hancock')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Hancock County
                <br/>
                {getCountyData('Hancock')?.attributes?.total} cases
                <br/>
                {getCountyData('Hancock')?.attributes?.deaths} death{getCountyData('Hancock')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Hancock County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.063" d="M216.3,166.2 L216.2,195.8 L210.6,195.8 L210.6,204.2 L207.7,204.2 L207.6,212.6 L202.0,212.5 L201.7,229.4 L185.5,229.0 L147.8,228.4 L147.9,224.3 L148.1,208.8 L148.6,173.4 L148.7,160.7 L171.5,160.9 L216.4,161.8 L216.4,161.8 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39063</fips>
                <name>Hancock</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-063</hc-key>
                <hc-a2>HA</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Wood')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Wood County
                <br/>
                {getCountyData('Wood')?.attributes?.total} cases
                <br/>
                {getCountyData('Wood')?.attributes?.deaths} death{getCountyData('Wood')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Wood County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.173" d="M216.4,161.8 L171.5,160.9 L148.7,160.7 L148.9,126.1 L149.2,112.6 L164.2,106.1 L174.4,97.8 L174.9,92.0 L179.3,87.3 L189.2,82.8 L195.6,73.8 L218.1,73.8 L218.1,94.0 L218.0,96.9 L217.8,110.2 L216.8,144.2 L216.8,144.8 L216.8,144.8 L216.7,147.6 L216.4,161.8 L216.4,161.8 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39173</fips>
                <name>Wood</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.57</hc-middle-y>
                <hc-key>us-oh-173</hc-key>
                <hc-a2>WO</hc-a2>
              </desc>
            </path>
          </Tooltip>
          
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Defiance')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Defiance County
                <br/>
                {getCountyData('Defiance')?.attributes?.total} cases
                <br/>
                {getCountyData('Defiance')?.attributes?.deaths} death{getCountyData('Defiance')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Defiance County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.039" d="M13.6,141.3 L13.9,125.5 L14.4,107.5 L32.3,107.9 L82.1,108.9 L98.7,109.2 L97.7,160.1 L85.5,160.0 L81.0,159.9 L81.2,151.4 L64.2,150.9 L64.4,142.4 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39039</fips>
                <name>Defiance</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.34</hc-middle-y>
                <hc-key>us-oh-039</hc-key>
                <hc-a2>DE</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Huron')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Huron County
                <br/>
                {getCountyData('Huron')?.attributes?.total} cases
                <br/>
                {getCountyData('Huron')?.attributes?.deaths} death{getCountyData('Huron')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Huron County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.077" d="M375.0,139.7 L374.8,156.1 L375.9,182.1 L361.2,182.2 L361.8,196.3 L354.9,196.3 L318.7,195.7 L310.3,195.7 L303.3,195.5 L302.9,180.0 L301.9,145.1 L301.8,141.6 L301.7,138.4 L328.2,139.1 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39077</fips>
                <name>Huron</name>
                <hc-middle-x>0.41</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-077</hc-key>
                <hc-a2>HU</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Lorain')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Lorain County
                <br/>
                {getCountyData('Lorain')?.attributes?.total} cases
                <br/>
                {getCountyData('Lorain')?.attributes?.deaths} death{getCountyData('Lorain')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Lorain County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.093" d="M375.9,182.1 L374.8,156.1 L375.0,139.7 L374.5,124.5 L374.1,109.4 L388.3,107.3 L399.7,100.9 L419.1,95.3 L429.7,96.1 L429.4,126.3 L443.2,126.3 L443.2,141.1 L429.3,141.2 L429.2,155.8 L414.7,155.9 L414.5,168.2 L400.4,168.2 L400.3,182.5 L381.4,182.1 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39093</fips>
                <name>Lorain</name>
                <hc-middle-x>0.41</hc-middle-x>
                <hc-middle-y>0.43</hc-middle-y>
                <hc-key>us-oh-093</hc-key>
                <hc-a2>LO</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Scioto')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Scioto County
                <br/>
                {getCountyData('Scioto')?.attributes?.total} cases
                <br/>
                {getCountyData('Scioto')?.attributes?.deaths} death{getCountyData('Scioto')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Scioto County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.145" d="M327.0,633.2 L322.1,632.8 L320.3,646.9 L311.6,646.4 L311.2,653.3 L315.1,662.6 L303.6,667.7 L299.6,664.2 L294.3,643.5 L295.4,637.2 L291.9,631.5 L279.1,637.3 L270.9,637.4 L266.0,644.4 L258.4,647.7 L254.9,655.5 L244.7,658.4 L238.0,656.0 L234.6,658.0 L234.9,607.2 L234.8,580.6 L243.2,585.3 L243.6,591.5 L275.9,592.5 L305.2,594.2 L313.3,594.8 L312.2,612.4 L329.0,613.5 L329.0,613.5 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39145</fips>
                <name>Scioto</name>
                <hc-middle-x>0.48</hc-middle-x>
                <hc-middle-y>0.45</hc-middle-y>
                <hc-key>us-oh-145</hc-key>
                <hc-a2>SC</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Lawrence')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Lawrence County
                <br/>
                {getCountyData('Lawrence')?.attributes?.total} cases
                <br/>
                {getCountyData('Lawrence')?.attributes?.deaths} death{getCountyData('Lawrence')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Lawrence County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.087" d="M327.0,633.2 L329.0,613.5 L329.0,613.5 L332.8,613.8 L340.4,614.5 L339.3,627.2 L354.4,628.5 L356.9,634.5 L356.1,646.0 L374.1,647.2 L373.0,664.9 L384.4,665.4 L381.9,681.7 L378.8,691.4 L366.4,693.3 L350.6,698.8 L340.9,700.0 L337.5,696.7 L334.9,687.0 L326.6,680.4 L317.4,670.2 L307.8,669.8 L303.6,667.7 L315.1,662.6 L311.2,653.3 L311.6,646.4 L320.3,646.9 L322.1,632.8 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39087</fips>
                <name>Lawrence</name>
                <hc-middle-x>0.58</hc-middle-x>
                <hc-middle-y>0.61</hc-middle-y>
                <hc-key>us-oh-087</hc-key>
                <hc-a2>LA</hc-a2>
              </desc>
            </path>
          </Tooltip>
        
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Brown')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Brown County
                <br/>
                {getCountyData('Brown')?.attributes?.total} cases
                <br/>
                {getCountyData('Brown')?.attributes?.deaths} death{getCountyData('Brown')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Brown County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.015" d="M168.2,645.4 L167.8,653.0 L157.9,649.8 L155.9,641.8 L147.4,636.7 L145.7,630.9 L126.8,623.7 L115.2,626.6 L123.7,556.8 L125.9,532.8 L132.4,533.3 L145.2,534.4 L143.5,578.4 L173.7,579.0 L173.7,579.0 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39015</fips>
                <name>Brown</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.59</hc-middle-y>
                <hc-key>us-oh-015</hc-key>
                <hc-a2>BR</hc-a2>
              </desc>
            </path>
          </Tooltip>
          
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Adams')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Adams County
                <br/>
                {getCountyData('Adams')?.attributes?.total} cases
                <br/>
                {getCountyData('Adams')?.attributes?.deaths} death{getCountyData('Adams')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Adams County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.001" d="M168.2,645.4 L173.7,579.0 L173.7,579.0 L183.1,579.4 L217.4,572.8 L228.2,573.4 L234.8,580.6 L234.9,607.2 L234.6,658.0 L231.4,661.8 L226.8,659.4 L225.5,654.1 L217.9,649.4 L204.1,646.5 L196.1,641.1 L182.3,644.5 L178.6,647.2 L177.0,653.8 L173.4,655.7 L167.8,653.0 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39001</fips>
                <name>Adams</name>
                <hc-middle-x>0.51</hc-middle-x>
                <hc-middle-y>0.46</hc-middle-y>
                <hc-key>us-oh-001</hc-key>
                <hc-a2>AD</hc-a2>
              </desc>
            </path>
          </Tooltip>
          
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Franklin')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Franklin County
                <br/>
                {getCountyData('Franklin')?.attributes?.total} cases
                <br/>
                {getCountyData('Franklin')?.attributes?.deaths} death{getCountyData('Franklin')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Franklin County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.049" d="M303.2,429.3 L271.2,427.1 L240.2,425.6 L239.2,405.1 L243.1,402.3 L239.5,394.8 L239.1,379.5 L245.3,379.7 L246.3,368.1 L251.7,368.3 L251.8,361.3 L276.3,362.8 L312.7,365.0 L310.9,394.1 L309.5,401.2 L305.3,400.9 L307.7,406.8 L306.5,423.9 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39049</fips>
                <name>Franklin</name>
                <hc-middle-x>0.48</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-049</hc-key>
                <hc-a2>FR</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Harrison')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Harrison County
                <br/>
                {getCountyData('Harrison')?.attributes?.total} cases
                <br/>
                {getCountyData('Harrison')?.attributes?.deaths} death{getCountyData('Harrison')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Harrison County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.067" d="M594.2,313.4 L593.3,356.3 L593.3,356.3 L559.1,355.2 L542.1,355.0 L525.1,354.9 L525.2,346.7 L525.5,329.2 L534.3,329.2 L534.8,303.9 L560.0,304.1 L583.6,304.8 L583.6,304.8 L595.0,305.0 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39067</fips>
                <name>Harrison</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-067</hc-key>
                <hc-a2>HA</hc-a2>
              </desc>
            </path>
          </Tooltip>
          
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Belmont')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Belmont County
                <br/>
                {getCountyData('Belmont')?.attributes?.total} cases
                <br/>
                {getCountyData('Belmont')?.attributes?.deaths} death{getCountyData('Belmont')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Belmont County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.013" d="M593.3,356.3 L610.7,356.8 L620.2,356.2 L618.9,367.9 L615.1,372.3 L616.1,380.4 L615.4,392.6 L612.0,395.9 L612.6,404.7 L607.3,402.7 L605.2,405.4 L607.8,413.6 L603.7,416.3 L557.8,414.2 L541.2,413.9 L541.3,404.5 L541.5,397.6 L541.7,380.0 L542.1,355.0 L559.1,355.2 L593.3,356.3 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39013</fips>
                <name>Belmont</name>
                <hc-middle-x>0.42</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-013</hc-key>
                <hc-a2>BE</hc-a2>
              </desc>
            </path>
          </Tooltip>
          
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Jefferson')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Jefferson County
                <br/>
                {getCountyData('Jefferson')?.attributes?.total} cases
                <br/>
                {getCountyData('Jefferson')?.attributes?.deaths} death{getCountyData('Jefferson')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Jefferson County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.081" d="M593.3,356.3 L594.2,313.4 L595.0,305.0 L583.6,304.8 L583.6,304.8 L583.7,296.3 L586.0,296.3 L586.2,279.2 L594.8,279.2 L594.8,270.6 L611.9,270.7 L611.9,273.4 L623.7,273.3 L629.9,282.3 L635.0,294.7 L630.1,309.7 L633.5,314.6 L634.9,324.6 L631.8,335.6 L626.1,341.9 L623.2,350.6 L620.2,356.2 L610.7,356.8 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39081</fips>
                <name>Jefferson</name>
                <hc-middle-x>0.52</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-081</hc-key>
                <hc-a2>JE</hc-a2>
              </desc>
            </path>
          </Tooltip>
          
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Meigs')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Meigs County
                <br/>
                {getCountyData('Meigs')?.attributes?.total} cases
                <br/>
                {getCountyData('Meigs')?.attributes?.deaths} death{getCountyData('Meigs')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Meigs County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.105" d="M378.8,578.8 L381.1,544.1 L386.9,544.5 L415.6,546.3 L464.6,548.6 L466.8,560.9 L466.0,565.1 L461.6,568.5 L456.0,568.3 L457.6,574.5 L463.5,580.6 L461.0,590.6 L465.0,596.6 L462.3,598.7 L456.1,594.3 L451.5,597.7 L449.4,605.2 L441.9,607.5 L439.1,603.1 L443.0,596.0 L438.0,586.3 L430.7,585.0 L426.9,578.2 L422.1,579.3 L419.9,585.2 L412.8,592.1 L413.3,583.5 L378.6,581.6 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39105</fips>
                <name>Meigs</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.30</hc-middle-y>
                <hc-key>us-oh-105</hc-key>
                <hc-a2>ME</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Vinton')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Vinton County
                <br/>
                {getCountyData('Vinton')?.attributes?.total} cases
                <br/>
                {getCountyData('Vinton')?.attributes?.deaths} death{getCountyData('Vinton')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Vinton County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.163" d="M386.9,544.5 L381.1,544.1 L378.8,578.8 L370.9,578.1 L361.7,577.3 L363.3,557.3 L345.8,556.1 L346.4,549.0 L328.9,547.3 L329.1,544.8 L312.0,543.6 L312.0,543.6 L312.7,534.9 L314.3,512.5 L331.4,513.8 L331.6,511.0 L349.2,512.3 L349.7,507.1 L383.6,509.4 L382.3,526.7 L388.1,527.1 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39163</fips>
                <name>Vinton</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.34</hc-middle-y>
                <hc-key>us-oh-163</hc-key>
                <hc-a2>VI</hc-a2>
              </desc>
            </path>
          </Tooltip>
          
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Jackson')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Jackson County
                <br/>
                {getCountyData('Jackson')?.attributes?.total} cases
                <br/>
                {getCountyData('Jackson')?.attributes?.deaths} death{getCountyData('Jackson')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Jackson County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.079" d="M329.1,544.8 L328.9,547.3 L346.4,549.0 L345.8,556.1 L363.3,557.3 L361.7,577.3 L358.7,614.4 L340.5,612.7 L340.4,614.5 L332.8,613.8 L329.0,613.5 L329.0,613.5 L312.2,612.4 L313.3,594.8 L305.2,594.2 L306.4,577.2 L308.5,551.3 L311.4,551.5 L312.0,543.6 L312.0,543.6 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39079</fips>
                <name>Jackson</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.51</hc-middle-y>
                <hc-key>us-oh-079</hc-key>
                <hc-a2>JA</hc-a2>
              </desc>
            </path>
          </Tooltip>
          
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Athens')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Athens County
                <br/>
                {getCountyData('Athens')?.attributes?.total} cases
                <br/>
                {getCountyData('Athens')?.attributes?.deaths} death{getCountyData('Athens')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Athens County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.009" d="M386.9,544.5 L388.1,527.1 L382.3,526.7 L383.6,509.4 L385.0,492.1 L402.0,493.3 L403.2,475.7 L409.1,476.1 L420.0,476.8 L418.9,494.5 L450.7,496.2 L449.6,521.9 L455.2,525.0 L455.0,530.7 L469.6,531.2 L469.1,541.6 L467.0,546.7 L464.6,548.6 L415.6,546.3 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39009</fips>
                <name>Athens</name>
                <hc-middle-x>0.39</hc-middle-x>
                <hc-middle-y>0.61</hc-middle-y>
                <hc-key>us-oh-009</hc-key>
                <hc-a2>AT</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Guernsey')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Guernsey County
                <br/>
                {getCountyData('Guernsey')?.attributes?.total} cases
                <br/>
                {getCountyData('Guernsey')?.attributes?.deaths} death{getCountyData('Guernsey')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Guernsey County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.059" d="M525.2,346.7 L525.1,354.9 L542.1,355.0 L541.7,380.0 L541.5,397.6 L518.7,398.1 L518.7,403.8 L507.3,403.5 L507.2,409.1 L490.0,408.7 L489.8,420.1 L472.8,419.6 L473.1,402.5 L467.4,402.3 L468.9,359.4 L475.7,359.6 L476.0,345.7 L482.7,345.8 L501.1,346.2 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39059</fips>
                <name>Guernsey</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.43</hc-middle-y>
                <hc-key>us-oh-059</hc-key>
                <hc-a2>GU</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Coshocton')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Coshocton County
                <br/>
                {getCountyData('Coshocton')?.attributes?.total} cases
                <br/>
                {getCountyData('Coshocton')?.attributes?.deaths} death{getCountyData('Coshocton')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Coshocton County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.031" d="M482.7,345.8 L476.0,345.7 L475.7,359.6 L468.9,359.4 L412.6,357.8 L398.6,357.0 L399.2,343.0 L397.2,342.9 L398.4,311.0 L398.7,300.7 L413.4,301.3 L469.4,302.4 L469.1,316.8 L483.4,317.2 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39031</fips>
                <name>Coshocton</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-031</hc-key>
                <hc-a2>CO</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Pickaway')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Pickaway County
                <br/>
                {getCountyData('Pickaway')?.attributes?.total} cases
                <br/>
                {getCountyData('Pickaway')?.attributes?.deaths} death{getCountyData('Pickaway')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Pickaway County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.129" d="M315.5,493.0 L276.7,490.5 L278.8,485.3 L236.3,483.2 L236.8,476.1 L238.7,448.3 L239.9,431.3 L240.2,425.6 L271.2,427.1 L303.2,429.3 L303.2,429.3 L300.2,474.8 L317.0,476.2 L315.7,491.3 L315.6,493.0 L315.5,493.0 L315.5,493.0 L315.5,493.0 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39129</fips>
                <name>Pickaway</name>
                <hc-middle-x>0.41</hc-middle-x>
                <hc-middle-y>0.49</hc-middle-y>
                <hc-key>us-oh-129</hc-key>
                <hc-a2>PI</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Madison')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Madison County
                <br/>
                {getCountyData('Madison')?.attributes?.total} cases
                <br/>
                {getCountyData('Madison')?.attributes?.deaths} death{getCountyData('Madison')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Madison County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.097" d="M240.2,425.6 L239.9,431.3 L238.7,448.3 L207.5,446.1 L178.5,443.5 L179.3,434.9 L179.6,432.6 L188.5,433.5 L200.7,386.7 L199.8,386.7 L201.5,371.8 L201.9,367.0 L235.6,367.8 L246.3,368.1 L245.3,379.7 L239.1,379.5 L239.5,394.8 L243.1,402.3 L239.2,405.1 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39097</fips>
                <name>Madison</name>
                <hc-middle-x>0.57</hc-middle-x>
                <hc-middle-y>0.48</hc-middle-y>
                <hc-key>us-oh-097</hc-key>
                <hc-a2>MA</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Fairfield')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Fairfield County
                <br/>
                {getCountyData('Fairfield')?.attributes?.total} cases
                <br/>
                {getCountyData('Fairfield')?.attributes?.deaths} death{getCountyData('Fairfield')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Fairfield County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.045" d="M303.2,429.3 L306.5,423.9 L307.7,406.8 L305.3,400.9 L309.5,401.2 L355.8,404.1 L357.4,403.1 L356.0,421.2 L367.4,422.0 L366.2,439.2 L372.0,439.6 L370.7,456.7 L353.3,455.4 L352.4,466.8 L334.2,465.7 L333.8,474.4 L317.2,473.4 L317.0,476.2 L300.2,474.8 L303.2,429.3 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39045</fips>
                <name>Fairfield</name>
                <hc-middle-x>0.42</hc-middle-x>
                <hc-middle-y>0.51</hc-middle-y>
                <hc-key>us-oh-045</hc-key>
                <hc-a2>FA</hc-a2>
              </desc>
            </path>
          </Tooltip>
          
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Fayette')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Fayette County
                <br/>
                {getCountyData('Fayette')?.attributes?.total} cases
                <br/>
                {getCountyData('Fayette')?.attributes?.deaths} death{getCountyData('Fayette')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Fayette County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.047" d="M238.7,448.3 L236.8,476.1 L236.3,483.2 L226.7,499.0 L220.0,510.1 L198.1,509.7 L187.1,509.4 L189.7,477.2 L175.5,475.9 L177.1,458.8 L178.5,443.5 L207.5,446.1 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39047</fips>
                <name>Fayette</name>
                <hc-middle-x>0.49</hc-middle-x>
                <hc-middle-y>0.42</hc-middle-y>
                <hc-key>us-oh-047</hc-key>
                <hc-a2>FA</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Ross')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Ross County
                <br/>
                {getCountyData('Ross')?.attributes?.total} cases
                <br/>
                {getCountyData('Ross')?.attributes?.deaths} death{getCountyData('Ross')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Ross County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.141" d="M220.0,510.1 L226.7,499.0 L236.3,483.2 L278.8,485.3 L276.7,490.5 L315.5,493.0 L315.5,493.0 L315.5,493.0 L315.3,496.0 L314.3,512.5 L312.7,534.9 L312.0,543.6 L312.0,543.6 L311.4,551.5 L308.5,551.3 L232.1,545.6 L222.6,545.1 L224.0,534.8 L221.3,536.7 L216.7,531.5 Z M315.5,493.0 L315.6,493.0 L315.5,493.0 L315.5,493.0 L315.5,493.0 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39141</fips>
                <name>Ross</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.49</hc-middle-y>
                <hc-key>us-oh-141</hc-key>
                <hc-a2>RO</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Highland')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Highland County
                <br/>
                {getCountyData('Highland')?.attributes?.total} cases
                <br/>
                {getCountyData('Highland')?.attributes?.deaths} death{getCountyData('Highland')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Highland County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.071" d="M187.1,509.4 L198.1,509.7 L220.0,510.1 L216.7,531.5 L221.3,536.7 L224.0,534.8 L222.6,545.1 L220.3,558.1 L217.4,572.8 L183.1,579.4 L173.7,579.0 L173.7,579.0 L143.5,578.4 L145.2,534.4 L153.8,539.0 L157.5,531.6 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39071</fips>
                <name>Highland</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-071</hc-key>
                <hc-a2>HI</hc-a2>
              </desc>
            </path>
          </Tooltip>
          
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Marion')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Marion County
                <br/>
                {getCountyData('Marion')?.attributes?.total} cases
                <br/>
                {getCountyData('Marion')?.attributes?.deaths} death{getCountyData('Marion')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Marion County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.101" d="M215.4,290.5 L215.4,271.4 L215.6,255.2 L232.7,255.3 L232.7,252.4 L261.3,252.4 L281.7,252.4 L298.8,252.2 L298.5,263.6 L284.0,263.8 L283.8,293.9 L275.1,295.0 L274.4,304.9 L253.0,303.7 L240.6,302.7 L240.7,290.4 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39101</fips>
                <name>Marion</name>
                <hc-middle-x>0.42</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-101</hc-key>
                <hc-a2>MA</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Hardin')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Hardin County
                <br/>
                {getCountyData('Hardin')?.attributes?.total} cases
                <br/>
                {getCountyData('Hardin')?.attributes?.deaths} death{getCountyData('Hardin')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Hardin County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.065" d="M215.6,255.2 L215.4,271.4 L215.4,290.5 L202.9,290.6 L200.3,290.6 L200.3,290.6 L200.4,289.5 L147.0,284.4 L147.0,283.1 L147.1,270.9 L147.3,262.5 L147.6,246.0 L147.8,228.4 L185.5,229.0 L201.7,229.4 L204.6,229.5 L204.4,252.2 L212.6,252.1 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39065</fips>
                <name>Hardin</name>
                <hc-middle-x>0.51</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-065</hc-key>
                <hc-a2>HA</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Shelby')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Shelby County
                <br/>
                {getCountyData('Shelby')?.attributes?.total} cases
                <br/>
                {getCountyData('Shelby')?.attributes?.deaths} death{getCountyData('Shelby')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Shelby County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.149" d="M128.6,293.6 L127.9,326.7 L126.1,334.4 L125.0,346.8 L124.6,351.7 L124.6,351.8 L95.3,349.0 L95.4,348.1 L63.5,348.0 L63.5,336.7 L63.8,317.4 L64.3,317.4 L63.9,317.3 L64.0,312.7 L78.2,312.9 L78.6,293.0 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39149</fips>
                <name>Shelby</name>
                <hc-middle-x>0.60</hc-middle-x>
                <hc-middle-y>0.49</hc-middle-y>
                <hc-key>us-oh-149</hc-key>
                <hc-a2>SH</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Logan')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Logan County
                <br/>
                {getCountyData('Logan')?.attributes?.total} cases
                <br/>
                {getCountyData('Logan')?.attributes?.deaths} death{getCountyData('Logan')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Logan County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.091" d="M126.1,334.4 L127.9,326.7 L128.6,293.6 L130.1,283.5 L147.0,283.1 L147.0,284.4 L200.4,289.5 L200.3,290.6 L200.3,290.6 L200.0,292.8 L195.0,344.0 L160.2,340.4 L160.4,337.5 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39091</fips>
                <name>Logan</name>
                <hc-middle-x>0.49</hc-middle-x>
                <hc-middle-y>0.49</hc-middle-y>
                <hc-key>us-oh-091</hc-key>
                <hc-a2>LO</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Van Wert')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Van Wert County
                <br/>
                {getCountyData('Van Wert')?.attributes?.total} cases
                <br/>
                {getCountyData('Van Wert')?.attributes?.deaths} death{getCountyData('Van Wert')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Van Wert County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.161" d="M71.8,193.8 L71.6,210.7 L80.0,210.8 L79.9,219.5 L79.8,227.8 L71.3,227.7 L70.9,253.2 L68.5,253.2 L62.1,253.0 L62.3,244.6 L11.0,243.3 L11.7,219.3 L12.2,192.5 L36.0,193.1 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39161</fips>
                <name>Van Wert</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.39</hc-middle-y>
                <hc-key>us-oh-161</hc-key>
                <hc-a2>VW</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Putnam')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Putnam County
                <br/>
                {getCountyData('Putnam')?.attributes?.total} cases
                <br/>
                {getCountyData('Putnam')?.attributes?.deaths} death{getCountyData('Putnam')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Putnam County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.137" d="M79.9,219.5 L80.0,210.8 L71.6,210.7 L71.8,193.8 L80.3,193.9 L81.0,159.9 L85.5,160.0 L97.7,160.1 L134.2,160.6 L148.7,160.7 L148.6,173.4 L148.1,208.8 L131.1,208.6 L131.1,211.5 L114.2,211.3 L114.1,219.8 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39137</fips>
                <name>Putnam</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-137</hc-key>
                <hc-a2>PU</hc-a2>
              </desc>
            </path>
          </Tooltip>
          
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Portage')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Portage County
                <br/>
                {getCountyData('Portage')?.attributes?.total} cases
                <br/>
                {getCountyData('Portage')?.attributes?.deaths} death{getCountyData('Portage')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Portage County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.133" d="M571.4,125.3 L572.0,155.6 L572.2,166.9 L572.8,195.4 L560.3,195.6 L524.0,196.0 L515.1,196.1 L514.9,167.6 L514.4,126.1 L528.1,126.1 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39133</fips>
                <name>Portage</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-133</hc-key>
                <hc-a2>PO</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Trumbull')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Trumbull County
                <br/>
                {getCountyData('Trumbull')?.attributes?.total} cases
                <br/>
                {getCountyData('Trumbull')?.attributes?.deaths} death{getCountyData('Trumbull')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Trumbull County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.155" d="M572.2,166.9 L572.0,155.6 L571.4,125.3 L571.2,114.5 L570.9,95.4 L620.3,94.9 L641.7,94.3 L642.1,112.9 L643.3,165.7 L587.7,166.6 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39155</fips>
                <name>Trumbull</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-155</hc-key>
                <hc-a2>TR</hc-a2>
              </desc>
            </path>
          </Tooltip>
          
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Geauga')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Geauga County
                <br/>
                {getCountyData('Geauga')?.attributes?.total} cases
                <br/>
                {getCountyData('Geauga')?.attributes?.deaths} death{getCountyData('Geauga')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Geauga County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.055" d="M570.9,95.4 L571.2,114.5 L571.4,125.3 L528.1,126.1 L514.4,126.1 L514.2,111.3 L514.0,83.0 L527.9,82.8 L527.9,69.0 L556.1,68.4 L555.7,54.3 L570.1,53.9 L570.7,83.4 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39055</fips>
                <name>Geauga</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.59</hc-middle-y>
                <hc-key>us-oh-055</hc-key>
                <hc-a2>GE</hc-a2>
              </desc>
            </path>
          </Tooltip>
          
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Ashtabula')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Ashtabula County
                <br/>
                {getCountyData('Ashtabula')?.attributes?.total} cases
                <br/>
                {getCountyData('Ashtabula')?.attributes?.deaths} death{getCountyData('Ashtabula')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Ashtabula County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.007" d="M570.9,95.4 L570.7,83.4 L570.1,53.9 L570.1,47.1 L569.8,27.8 L585.2,22.9 L589.0,18.8 L597.3,17.0 L601.8,13.6 L639.5,0.0 L641.7,94.3 L620.3,94.9 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39007</fips>
                <name>Ashtabula</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.57</hc-middle-y>
                <hc-key>us-oh-007</hc-key>
                <hc-a2>AS</hc-a2>
              </desc>
            </path>
          </Tooltip>
          
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Sandusky')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Sandusky County
                <br/>
                {getCountyData('Sandusky')?.attributes?.total} cases
                <br/>
                {getCountyData('Sandusky')?.attributes?.deaths} death{getCountyData('Sandusky')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Sandusky County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.143" d="M279.7,105.6 L281.6,108.4 L285.6,107.1 L285.5,111.0 L300.9,111.1 L301.7,138.4 L301.8,141.6 L301.9,145.1 L301.9,145.1 L259.1,144.7 L241.8,145.2 L216.8,144.8 L216.8,144.8 L216.8,144.2 L216.8,143.8 L216.8,142.8 L217.3,127.0 L217.5,119.3 L217.8,110.2 L218.0,96.9 L229.1,96.8 L229.1,105.3 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39143</fips>
                <name>Sandusky</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.64</hc-middle-y>
                <hc-key>us-oh-143</hc-key>
                <hc-a2>SA</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Seneca')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Seneca County
                <br/>
                {getCountyData('Seneca')?.attributes?.total} cases
                <br/>
                {getCountyData('Seneca')?.attributes?.deaths} death{getCountyData('Seneca')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Seneca County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.147" d="M216.3,166.2 L216.4,161.8 L216.4,161.8 L216.4,161.8 L216.7,147.6 L216.8,144.8 L216.8,144.8 L241.8,145.2 L259.1,144.7 L301.9,145.1 L302.9,180.0 L303.3,195.5 L299.8,196.1 L261.5,195.9 L239.5,195.8 L216.2,195.8 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39147</fips>
                <name>Seneca</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-147</hc-key>
                <hc-a2>SE</hc-a2>
              </desc>
            </path>
          </Tooltip>
          
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Warren')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Warren County
                <br/>
                {getCountyData('Warren')?.attributes?.total} cases
                <br/>
                {getCountyData('Warren')?.attributes?.deaths} death{getCountyData('Warren')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Warren County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.165" d="M85.3,525.4 L71.6,524.3 L71.6,524.3 L74.7,492.5 L75.8,474.5 L70.9,475.3 L71.0,466.4 L83.0,466.7 L108.7,469.4 L126.5,471.2 L129.4,471.5 L126.2,506.8 L123.8,532.6 L119.7,532.2 L85.7,528.8 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39165</fips>
                <name>Warren</name>
                <hc-middle-x>0.46</hc-middle-x>
                <hc-middle-y>0.49</hc-middle-y>
                <hc-key>us-oh-165</hc-key>
                <hc-a2>WA</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Butler')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Butler County
                <br/>
                {getCountyData('Butler')?.attributes?.total} cases
                <br/>
                {getCountyData('Butler')?.attributes?.deaths} death{getCountyData('Butler')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Butler County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.017" d="M53.8,465.8 L54.6,465.9 L71.0,466.4 L70.9,475.3 L75.8,474.5 L74.7,492.5 L71.6,524.3 L48.7,521.1 L29.8,519.5 L28.0,520.8 L1.1,520.1 L1.8,504.2 L3.2,469.0 L53.8,470.1 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39017</fips>
                <name>Butler</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.48</hc-middle-y>
                <hc-key>us-oh-017</hc-key>
                <hc-a2>BU</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Montgomery')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Montgomery County
                <br/>
                {getCountyData('Montgomery')?.attributes?.total} cases
                <br/>
                {getCountyData('Montgomery')?.attributes?.deaths} death{getCountyData('Montgomery')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Montgomery County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.113" d="M71.0,466.4 L54.6,465.9 L53.8,465.8 L54.1,443.7 L54.4,402.0 L59.4,402.0 L63.3,402.0 L103.5,402.2 L103.4,409.4 L119.3,410.9 L119.3,410.9 L119.1,413.5 L118.8,416.6 L112.9,418.8 L108.7,469.4 L83.0,466.7 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39113</fips>
                <name>Montgomery</name>
                <hc-middle-x>0.48</hc-middle-x>
                <hc-middle-y>0.49</hc-middle-y>
                <hc-key>us-oh-113</hc-key>
                <hc-a2>MO</hc-a2>
              </desc>
            </path>
          </Tooltip>
          
          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Crawford')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Crawford County
                <br/>
                {getCountyData('Crawford')?.attributes?.total} cases
                <br/>
                {getCountyData('Crawford')?.attributes?.deaths} death{getCountyData('Crawford')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Crawford County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.033" d="M303.3,195.5 L310.3,195.7 L318.7,195.7 L318.8,208.4 L318.2,251.1 L298.8,250.8 L298.8,252.2 L281.7,252.4 L261.3,252.4 L261.4,221.2 L261.5,195.9 L299.8,196.1 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39033</fips>
                <name>Crawford</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-033</hc-key>
                <hc-a2>CR</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Hamilton')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Hamilton County
                <br/>
                {getCountyData('Hamilton')?.attributes?.total} cases
                <br/>
                {getCountyData('Hamilton')?.attributes?.deaths} death{getCountyData('Hamilton')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Hamilton County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.061" d="M71.6,524.3 L85.3,525.4 L85.7,528.8 L76.8,537.1 L82.8,541.8 L79.2,547.5 L75.5,577.1 L69.4,573.1 L58.9,569.5 L58.3,561.3 L54.9,557.2 L47.6,562.2 L40.4,561.3 L37.0,564.6 L29.6,565.8 L19.8,559.9 L15.6,553.3 L10.8,551.0 L5.5,556.7 L0.0,559.0 L1.1,520.1 L28.0,520.8 L29.8,519.5 L48.7,521.1 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39061</fips>
                <name>Hamilton</name>
                <hc-middle-x>0.49</hc-middle-x>
                <hc-middle-y>0.42</hc-middle-y>
                <hc-key>us-oh-061</hc-key>
                <hc-a2>HA</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Hocking')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Hocking County
                <br/>
                {getCountyData('Hocking')?.attributes?.total} cases
                <br/>
                {getCountyData('Hocking')?.attributes?.deaths} death{getCountyData('Hocking')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Hocking County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.073" d="M315.5,493.0 L315.5,493.0 L315.7,491.3 L317.0,476.2 L317.2,473.4 L333.8,474.4 L334.2,465.7 L352.4,466.8 L353.3,455.4 L370.7,456.7 L369.9,468.0 L387.7,469.2 L387.5,474.7 L403.2,475.7 L402.0,493.3 L385.0,492.1 L383.6,509.4 L349.7,507.1 L349.2,512.3 L331.6,511.0 L331.4,513.8 L314.3,512.5 L315.3,496.0 L315.5,493.0 L315.5,493.0 L315.5,493.0 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39073</fips>
                <name>Hocking</name>
                <hc-middle-x>0.51</hc-middle-x>
                <hc-middle-y>0.52</hc-middle-y>
                <hc-key>us-oh-073</hc-key>
                <hc-a2>HO</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Darke')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Darke County
                <br/>
                {getCountyData('Darke')?.attributes?.total} cases
                <br/>
                {getCountyData('Darke')?.attributes?.deaths} death{getCountyData('Darke')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Darke County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.037" d="M63.3,402.0 L59.4,402.0 L54.4,402.0 L33.5,401.9 L5.4,401.1 L8.7,324.7 L8.9,316.4 L39.3,317.3 L63.8,317.4 L63.5,336.7 L63.5,348.0 L63.4,392.1 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39037</fips>
                <name>Darke</name>
                <hc-middle-x>0.51</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-037</hc-key>
                <hc-a2>DA</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Carroll')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Carroll County
                <br/>
                {getCountyData('Carroll')?.attributes?.total} cases
                <br/>
                {getCountyData('Carroll')?.attributes?.deaths} death{getCountyData('Carroll')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Carroll County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.019" d="M538.4,261.6 L538.8,247.4 L544.5,246.2 L561.0,246.2 L586.2,245.9 L586.3,262.2 L594.8,262.2 L594.8,270.6 L594.8,279.2 L586.2,279.2 L586.0,296.3 L583.7,296.3 L583.6,304.8 L583.6,304.8 L560.0,304.1 L534.8,303.9 L535.2,278.3 L526.7,278.1 L527.1,261.5 L527.1,261.5 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39019</fips>
                <name>Carroll</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.49</hc-middle-y>
                <hc-key>us-oh-019</hc-key>
                <hc-a2>CA</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Stark')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Stark County
                <br/>
                {getCountyData('Stark')?.attributes?.total} cases
                <br/>
                {getCountyData('Stark')?.attributes?.deaths} death{getCountyData('Stark')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Stark County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.151" d="M538.4,261.6 L527.1,261.5 L527.1,261.5 L502.0,261.7 L478.0,265.3 L477.8,261.4 L477.8,258.9 L477.9,243.2 L477.7,211.0 L511.3,212.1 L511.7,196.2 L515.1,196.1 L524.0,196.0 L560.3,195.6 L560.5,207.6 L560.6,212.4 L561.0,242.0 L561.0,246.2 L544.5,246.2 L538.8,247.4 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39151</fips>
                <name>Stark</name>
                <hc-middle-x>0.45</hc-middle-x>
                <hc-middle-y>0.52</hc-middle-y>
                <hc-key>us-oh-151</hc-key>
                <hc-a2>ST</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Holmes')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Holmes County
                <br/>
                {getCountyData('Holmes')?.attributes?.total} cases
                <br/>
                {getCountyData('Holmes')?.attributes?.deaths} death{getCountyData('Holmes')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Holmes County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.075" d="M477.8,258.9 L477.8,261.4 L478.0,265.3 L476.1,266.8 L475.3,302.6 L469.4,302.4 L413.4,301.3 L398.7,300.7 L399.5,277.9 L393.4,278.9 L393.3,259.6 L407.3,259.4 L444.1,259.4 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39075</fips>
                <name>Holmes</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-075</hc-key>
                <hc-a2>HO</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Mahoning')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Mahoning County
                <br/>
                {getCountyData('Mahoning')?.attributes?.total} cases
                <br/>
                {getCountyData('Mahoning')?.attributes?.deaths} death{getCountyData('Mahoning')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Mahoning County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.099" d="M560.6,212.4 L560.5,207.6 L560.3,195.6 L572.8,195.4 L572.2,166.9 L587.7,166.6 L643.3,165.7 L643.8,183.6 L644.3,211.0 L599.6,211.8 L599.6,206.2 L588.6,206.3 L588.7,212.0 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39099</fips>
                <name>Mahoning</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-099</hc-key>
                <hc-a2>MA</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Ashland')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Ashland County
                <br/>
                {getCountyData('Ashland')?.attributes?.total} cases
                <br/>
                {getCountyData('Ashland')?.attributes?.deaths} death{getCountyData('Ashland')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Ashland County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.005" d="M361.8,196.3 L361.2,182.2 L375.9,182.1 L381.4,182.1 L400.3,182.5 L400.0,196.4 L406.5,196.4 L407.2,216.9 L407.3,259.4 L393.3,259.6 L393.4,278.9 L389.2,279.6 L376.1,281.5 L375.7,248.1 L369.9,248.0 L369.8,236.3 L364.2,228.1 L364.0,196.3 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39005</fips>
                <name>Ashland</name>
                <hc-middle-x>0.54</hc-middle-x>
                <hc-middle-y>0.49</hc-middle-y>
                <hc-key>us-oh-005</hc-key>
                <hc-a2>AS</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Delaware')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Delaware County
                <br/>
                {getCountyData('Delaware')?.attributes?.total} cases
                <br/>
                {getCountyData('Delaware')?.attributes?.deaths} death{getCountyData('Delaware')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Delaware County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.041" d="M315.4,321.4 L314.9,329.6 L314.5,335.6 L314.1,342.4 L312.7,365.0 L276.3,362.8 L251.8,361.3 L251.6,341.6 L240.3,341.5 L240.6,302.7 L253.0,303.7 L274.4,304.9 L274.2,307.8 L288.7,308.6 L287.9,319.7 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39041</fips>
                <name>Delaware</name>
                <hc-middle-x>0.40</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-041</hc-key>
                <hc-a2>DE</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Knox')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Knox County
                <br/>
                {getCountyData('Knox')?.attributes?.total} cases
                <br/>
                {getCountyData('Knox')?.attributes?.deaths} death{getCountyData('Knox')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Knox County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.083" d="M314.5,335.6 L314.9,329.6 L315.4,321.4 L330.0,322.4 L332.1,287.7 L333.5,282.5 L370.4,282.3 L376.1,281.5 L389.2,279.6 L393.4,278.9 L399.5,277.9 L398.7,300.7 L398.4,311.0 L397.2,342.9 L374.8,342.8 L355.3,341.7 L355.4,338.0 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39083</fips>
                <name>Knox</name>
                <hc-middle-x>0.59</hc-middle-x>
                <hc-middle-y>0.49</hc-middle-y>
                <hc-key>us-oh-083</hc-key>
                <hc-a2>KN</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Auglaize')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Auglaize County
                <br/>
                {getCountyData('Auglaize')?.attributes?.total} cases
                <br/>
                {getCountyData('Auglaize')?.attributes?.deaths} death{getCountyData('Auglaize')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Auglaize County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.011" d="M62.1,253.0 L68.5,253.2 L70.9,253.2 L96.7,253.5 L96.6,259.2 L113.6,259.3 L113.5,262.2 L147.3,262.5 L147.1,270.9 L147.0,283.1 L130.1,283.5 L128.6,293.6 L78.6,293.0 L78.2,312.9 L64.0,312.7 L63.9,317.3 L60.8,316.5 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39011</fips>
                <name>Auglaize</name>
                <hc-middle-x>0.35</hc-middle-x>
                <hc-middle-y>0.32</hc-middle-y>
                <hc-key>us-oh-011</hc-key>
                <hc-a2>AU</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Licking')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Licking County
                <br/>
                {getCountyData('Licking')?.attributes?.total} cases
                <br/>
                {getCountyData('Licking')?.attributes?.deaths} death{getCountyData('Licking')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Licking County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.089" d="M309.5,401.2 L310.9,394.1 L312.7,365.0 L314.1,342.4 L314.5,335.6 L355.4,338.0 L355.3,341.7 L374.8,342.8 L397.2,342.9 L399.2,343.0 L398.6,357.0 L397.0,399.2 L392.1,399.0 L391.7,406.4 L364.1,404.6 L357.4,403.1 L355.8,404.1 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39089</fips>
                <name>Licking</name>
                <hc-middle-x>0.51</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-089</hc-key>
                <hc-a2>LI</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Lucas')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Lucas County
                <br/>
                {getCountyData('Lucas')?.attributes?.total} cases
                <br/>
                {getCountyData('Lucas')?.attributes?.deaths} death{getCountyData('Lucas')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Lucas County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.095" d="M149.2,112.6 L149.4,101.3 L149.5,98.4 L149.9,73.1 L150.6,53.2 L211.2,51.6 L212.0,53.7 L223.2,57.5 L233.0,56.4 L247.0,68.7 L255.3,72.4 L254.8,73.3 L218.1,73.8 L195.6,73.8 L189.2,82.8 L179.3,87.3 L174.9,92.0 L174.4,97.8 L164.2,106.1 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39095</fips>
                <name>Lucas</name>
                <hc-middle-x>0.22</hc-middle-x>
                <hc-middle-y>0.40</hc-middle-y>
                <hc-key>us-oh-095</hc-key>
                <hc-a2>LU</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Henry')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Henry County
                <br/>
                {getCountyData('Henry')?.attributes?.total} cases
                <br/>
                {getCountyData('Henry')?.attributes?.deaths} death{getCountyData('Henry')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Henry County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.069" d="M149.5,98.4 L149.4,101.3 L149.2,112.6 L148.9,126.1 L148.7,160.7 L134.2,160.6 L97.7,160.1 L98.7,109.2 L82.1,108.9 L82.1,106.0 L82.3,97.6 L124.0,98.3 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39069</fips>
                <name>Henry</name>
                <hc-middle-x>0.62</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-069</hc-key>
                <hc-a2>HE</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Williams')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Williams County
                <br/>
                {getCountyData('Williams')?.attributes?.total} cases
                <br/>
                {getCountyData('Williams')?.attributes?.deaths} death{getCountyData('Williams')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Williams County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.171" d="M82.3,97.6 L82.1,106.0 L82.1,108.9 L32.3,107.9 L14.4,107.5 L15.5,55.0 L74.8,54.5 L74.6,71.8 L77.1,71.9 L76.7,91.9 L82.4,92.0 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39171</fips>
                <name>Williams</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.49</hc-middle-y>
                <hc-key>us-oh-171</hc-key>
                <hc-a2>WI</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Tuscarawas')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Tuscarawas County
                <br/>
                {getCountyData('Tuscarawas')?.attributes?.total} cases
                <br/>
                {getCountyData('Tuscarawas')?.attributes?.deaths} death{getCountyData('Tuscarawas')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Tuscarawas County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.157" d="M527.1,261.5 L527.1,261.5 L526.7,278.1 L535.2,278.3 L534.8,303.9 L534.3,329.2 L525.5,329.2 L525.2,346.7 L501.1,346.2 L482.7,345.8 L483.4,317.2 L469.1,316.8 L469.4,302.4 L475.3,302.6 L476.1,266.8 L478.0,265.3 L502.0,261.7 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39157</fips>
                <name>Tuscarawas</name>
                <hc-middle-x>0.60</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-157</hc-key>
                <hc-a2>TU</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Perry')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Perry County
                <br/>
                {getCountyData('Perry')?.attributes?.total} cases
                <br/>
                {getCountyData('Perry')?.attributes?.deaths} death{getCountyData('Perry')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Perry County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.127" d="M420.0,476.8 L409.1,476.1 L403.2,475.7 L387.5,474.7 L387.7,469.2 L369.9,468.0 L370.7,456.7 L372.0,439.6 L366.2,439.2 L367.4,422.0 L356.0,421.2 L357.4,403.1 L364.1,404.6 L391.7,406.4 L402.5,407.1 L401.4,424.3 L416.0,425.1 L415.4,434.0 L414.9,442.4 L423.4,442.9 L421.2,476.9 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39127</fips>
                <name>Perry</name>
                <hc-middle-x>0.57</hc-middle-x>
                <hc-middle-y>0.60</hc-middle-y>
                <hc-key>us-oh-127</hc-key>
                <hc-a2>PE</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Pike')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Pike County
                <br/>
                {getCountyData('Pike')?.attributes?.total} cases
                <br/>
                {getCountyData('Pike')?.attributes?.deaths} death{getCountyData('Pike')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Pike County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.131" d="M217.4,572.8 L220.3,558.1 L222.6,545.1 L232.1,545.6 L308.5,551.3 L306.4,577.2 L305.2,594.2 L275.9,592.5 L243.6,591.5 L243.2,585.3 L234.8,580.6 L228.2,573.4 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39131</fips>
                <name>Pike</name>
                <hc-middle-x>0.49</hc-middle-x>
                <hc-middle-y>0.51</hc-middle-y>
                <hc-key>us-oh-131</hc-key>
                <hc-a2>PI</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Clermont')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Clermont County
                <br/>
                {getCountyData('Clermont')?.attributes?.total} cases
                <br/>
                {getCountyData('Clermont')?.attributes?.deaths} death{getCountyData('Clermont')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Clermont County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.025" d="M123.8,532.6 L124.2,532.6 L125.9,532.8 L123.7,556.8 L115.2,626.6 L112.5,626.7 L90.9,619.4 L88.4,615.2 L88.0,602.7 L80.3,590.6 L75.5,577.1 L79.2,547.5 L82.8,541.8 L76.8,537.1 L85.7,528.8 L119.7,532.2 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39025</fips>
                <name>Clermont</name>
                <hc-middle-x>0.44</hc-middle-x>
                <hc-middle-y>0.43</hc-middle-y>
                <hc-key>us-oh-025</hc-key>
                <hc-a2>CL</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Clinton')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Clinton County
                <br/>
                {getCountyData('Clinton')?.attributes?.total} cases
                <br/>
                {getCountyData('Clinton')?.attributes?.deaths} death{getCountyData('Clinton')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Clinton County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.027" d="M125.9,532.8 L124.2,532.6 L123.8,532.6 L126.2,506.8 L129.4,471.5 L147.2,473.3 L175.5,475.9 L189.7,477.2 L187.1,509.4 L157.5,531.6 L153.8,539.0 L145.2,534.4 L132.4,533.3 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39027</fips>
                <name>Clinton</name>
                <hc-middle-x>0.40</hc-middle-x>
                <hc-middle-y>0.51</hc-middle-y>
                <hc-key>us-oh-027</hc-key>
                <hc-a2>CL</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Union')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Union County
                <br/>
                {getCountyData('Union')?.attributes?.total} cases
                <br/>
                {getCountyData('Union')?.attributes?.deaths} death{getCountyData('Union')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Union County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.159" d="M200.3,290.6 L202.9,290.6 L215.4,290.5 L240.7,290.4 L240.6,302.7 L240.3,341.5 L251.6,341.6 L251.8,361.3 L251.7,368.3 L246.3,368.1 L235.6,367.8 L201.9,367.0 L203.5,344.8 L195.0,344.0 L200.0,292.8 L200.3,290.6 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39159</fips>
                <name>Union</name>
                <hc-middle-x>0.51</hc-middle-x>
                <hc-middle-y>0.66</hc-middle-y>
                <hc-key>us-oh-159</hc-key>
                <hc-a2>UN</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Champaign')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Champaign County
                <br/>
                {getCountyData('Champaign')?.attributes?.total} cases
                <br/>
                {getCountyData('Champaign')?.attributes?.deaths} death{getCountyData('Champaign')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Champaign County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.021" d="M124.6,351.7 L125.0,346.8 L126.1,334.4 L160.4,337.5 L160.2,340.4 L195.0,344.0 L203.5,344.8 L201.9,367.0 L201.5,371.8 L199.8,386.7 L158.9,383.0 L122.1,379.7 L122.1,379.7 L122.3,377.1 L122.4,375.9 L123.3,365.8 L123.7,361.4 L124.0,357.4 L124.6,351.8 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39021</fips>
                <name>Champaign</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-021</hc-key>
                <hc-a2>CH</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Miami')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Miami County
                <br/>
                {getCountyData('Miami')?.attributes?.total} cases
                <br/>
                {getCountyData('Miami')?.attributes?.deaths} death{getCountyData('Miami')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Miami County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.109" d="M122.1,379.7 L120.5,398.2 L119.3,410.9 L119.3,410.9 L103.4,409.4 L103.5,402.2 L63.3,402.0 L63.4,392.1 L63.5,348.0 L95.4,348.1 L95.3,349.0 L124.6,351.8 L124.6,351.7 L124.0,357.4 L122.1,379.7 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39109</fips>
                <name>Miami</name>
                <hc-middle-x>0.46</hc-middle-x>
                <hc-middle-y>0.48</hc-middle-y>
                <hc-key>us-oh-109</hc-key>
                <hc-a2>MI</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Allen')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Allen County
                <br/>
                {getCountyData('Allen')?.attributes?.total} cases
                <br/>
                {getCountyData('Allen')?.attributes?.deaths} death{getCountyData('Allen')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Allen County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.003" d="M148.1,208.8 L147.9,224.3 L147.8,228.4 L147.6,246.0 L147.3,262.5 L113.5,262.2 L113.6,259.3 L96.6,259.2 L96.7,253.5 L70.9,253.2 L71.3,227.7 L79.8,227.8 L79.9,219.5 L114.1,219.8 L114.2,211.3 L131.1,211.5 L131.1,208.6 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39003</fips>
                <name>Allen</name>
                <hc-middle-x>0.58</hc-middle-x>
                <hc-middle-y>0.62</hc-middle-y>
                <hc-key>us-oh-003</hc-key>
                <hc-a2>AL</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Clark')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Clark County
                <br/>
                {getCountyData('Clark')?.attributes?.total} cases
                <br/>
                {getCountyData('Clark')?.attributes?.deaths} death{getCountyData('Clark')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Clark County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.023" d="M118.8,416.6 L119.1,413.5 L119.3,410.9 L119.3,410.9 L120.5,398.2 L122.1,379.7 L122.1,379.7 L158.9,383.0 L199.8,386.7 L200.7,386.7 L188.5,433.5 L179.6,432.6 L165.8,430.8 L165.6,429.3 L152.3,427.4 L152.7,422.5 L135.6,421.1 L135.9,418.2 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39023</fips>
                <name>Clark</name>
                <hc-middle-x>0.49</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-023</hc-key>
                <hc-a2>CL</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Mercer')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Mercer County
                <br/>
                {getCountyData('Mercer')?.attributes?.total} cases
                <br/>
                {getCountyData('Mercer')?.attributes?.deaths} death{getCountyData('Mercer')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Mercer County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.107" d="M63.9,317.3 L64.3,317.4 L63.8,317.4 L39.3,317.3 L8.9,316.4 L10.2,273.7 L11.0,243.3 L62.3,244.6 L62.1,253.0 L60.8,316.5 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39107</fips>
                <name>Mercer</name>
                <hc-middle-x>0.51</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-107</hc-key>
                <hc-a2>ME</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Gallia')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Gallia County
                <br/>
                {getCountyData('Gallia')?.attributes?.total} cases
                <br/>
                {getCountyData('Gallia')?.attributes?.deaths} death{getCountyData('Gallia')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Gallia County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.053" d="M361.7,577.3 L370.9,578.1 L378.8,578.8 L378.6,581.6 L413.3,583.5 L412.8,592.1 L406.1,604.0 L406.0,614.9 L394.3,625.5 L397.6,631.0 L400.2,641.4 L399.0,646.3 L402.0,657.0 L400.6,662.0 L394.8,663.6 L390.5,662.3 L384.4,665.4 L373.0,664.9 L374.1,647.2 L356.1,646.0 L356.9,634.5 L354.4,628.5 L339.3,627.2 L340.4,614.5 L340.5,612.7 L358.7,614.4 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39053</fips>
                <name>Gallia</name>
                <hc-middle-x>0.49</hc-middle-x>
                <hc-middle-y>0.49</hc-middle-y>
                <hc-key>us-oh-053</hc-key>
                <hc-a2>GA</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Morrow')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Morrow County
                <br/>
                {getCountyData('Morrow')?.attributes?.total} cases
                <br/>
                {getCountyData('Morrow')?.attributes?.deaths} death{getCountyData('Morrow')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Morrow County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.117" d="M315.4,321.4 L287.9,319.7 L288.7,308.6 L274.2,307.8 L274.4,304.9 L275.1,295.0 L283.8,293.9 L284.0,263.8 L298.5,263.6 L298.8,252.2 L298.8,250.8 L318.2,251.1 L333.0,251.5 L333.5,282.5 L332.1,287.7 L330.0,322.4 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39117</fips>
                <name>Morrow</name>
                <hc-middle-x>0.51</hc-middle-x>
                <hc-middle-y>0.48</hc-middle-y>
                <hc-key>us-oh-117</hc-key>
                <hc-a2>MO</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Monroe')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Monroe County
                <br/>
                {getCountyData('Monroe')?.attributes?.total} cases
                <br/>
                {getCountyData('Monroe')?.attributes?.deaths} death{getCountyData('Monroe')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Monroe County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.111" d="M603.7,416.3 L603.1,426.3 L596.6,433.3 L602.3,441.5 L597.6,448.3 L595.6,461.1 L586.1,464.0 L572.1,477.2 L572.3,471.0 L540.6,470.1 L535.1,465.0 L535.2,445.3 L529.4,445.3 L529.8,413.7 L541.2,413.9 L557.8,414.2 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39111</fips>
                <name>Monroe</name>
                <hc-middle-x>0.49</hc-middle-x>
                <hc-middle-y>0.40</hc-middle-y>
                <hc-key>us-oh-111</hc-key>
                <hc-a2>MO</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Preble')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Preble County
                <br/>
                {getCountyData('Preble')?.attributes?.total} cases
                <br/>
                {getCountyData('Preble')?.attributes?.deaths} death{getCountyData('Preble')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Preble County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.135" d="M53.8,465.8 L53.8,470.1 L3.2,469.0 L4.6,421.2 L5.4,401.1 L33.5,401.9 L54.4,402.0 L54.1,443.7 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39135</fips>
                <name>Preble</name>
                <hc-middle-x>0.51</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-135</hc-key>
                <hc-a2>PR</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Muskingum')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Muskingum County
                <br/>
                {getCountyData('Muskingum')?.attributes?.total} cases
                <br/>
                {getCountyData('Muskingum')?.attributes?.deaths} death{getCountyData('Muskingum')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Muskingum County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.119" d="M391.7,406.4 L392.1,399.0 L397.0,399.2 L398.6,357.0 L412.6,357.8 L468.9,359.4 L467.4,402.3 L473.1,402.5 L472.8,419.6 L472.5,428.1 L472.4,436.6 L437.8,435.0 L415.4,434.0 L416.0,425.1 L401.4,424.3 L402.5,407.1 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39119</fips>
                <name>Muskingum</name>
                <hc-middle-x>0.51</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-119</hc-key>
                <hc-a2>MU</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Richland')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Richland County
                <br/>
                {getCountyData('Richland')?.attributes?.total} cases
                <br/>
                {getCountyData('Richland')?.attributes?.deaths} death{getCountyData('Richland')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Richland County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.139" d="M318.2,251.1 L318.8,208.4 L318.7,195.7 L354.9,196.3 L361.8,196.3 L364.0,196.3 L364.2,228.1 L369.8,236.3 L369.9,248.0 L375.7,248.1 L376.1,281.5 L370.4,282.3 L333.5,282.5 L333.0,251.5 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39139</fips>
                <name>Richland</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-139</hc-key>
                <hc-a2>RI</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Fulton')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Fulton County
                <br/>
                {getCountyData('Fulton')?.attributes?.total} cases
                <br/>
                {getCountyData('Fulton')?.attributes?.deaths} death{getCountyData('Fulton')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Fulton County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.051" d="M74.8,54.5 L130.5,53.5 L150.6,53.2 L149.9,73.1 L149.5,98.4 L124.0,98.3 L82.3,97.6 L82.4,92.0 L76.7,91.9 L77.1,71.9 L74.6,71.8 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39051</fips>
                <name>Fulton</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-051</hc-key>
                <hc-a2>FU</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Washington')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Washington County
                <br/>
                {getCountyData('Washington')?.attributes?.total} cases
                <br/>
                {getCountyData('Washington')?.attributes?.deaths} death{getCountyData('Washington')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Washington County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.167" d="M535.1,465.0 L540.6,470.1 L572.3,471.0 L572.1,477.2 L564.1,485.9 L559.8,493.4 L550.3,498.7 L545.6,507.3 L537.9,507.7 L526.4,515.5 L522.5,516.5 L518.7,513.9 L517.0,507.6 L509.5,503.6 L494.3,517.5 L493.3,529.7 L477.4,529.9 L473.4,533.8 L474.3,539.2 L469.1,541.6 L469.6,531.2 L455.0,530.7 L455.2,525.0 L449.6,521.9 L450.7,496.2 L453.6,496.4 L453.9,487.6 L471.2,490.1 L471.7,480.3 L469.1,480.2 L470.2,469.9 L474.0,468.7 L489.2,469.2 L506.5,469.7 L506.4,457.5 L515.4,460.4 L518.2,466.0 L535.0,467.7 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39167</fips>
                <name>Washington</name>
                <hc-middle-x>0.42</hc-middle-x>
                <hc-middle-y>0.40</hc-middle-y>
                <hc-key>us-oh-167</hc-key>
                <hc-a2>WA</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Wyandot')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Wyandot County
                <br/>
                {getCountyData('Wyandot')?.attributes?.total} cases
                <br/>
                {getCountyData('Wyandot')?.attributes?.deaths} death{getCountyData('Wyandot')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Wyandot County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.175" d="M216.2,195.8 L239.5,195.8 L261.5,195.9 L261.4,221.2 L261.3,252.4 L232.7,252.4 L232.7,255.3 L215.6,255.2 L212.6,252.1 L204.4,252.2 L204.6,229.5 L201.7,229.4 L202.0,212.5 L207.6,212.6 L207.7,204.2 L210.6,204.2 L210.6,195.8 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39175</fips>
                <name>Wyandot</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-175</hc-key>
                <hc-a2>WY</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Wayne')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Wayne County
                <br/>
                {getCountyData('Wayne')?.attributes?.total} cases
                <br/>
                {getCountyData('Wayne')?.attributes?.deaths} death{getCountyData('Wayne')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Wayne County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.169" d="M477.8,258.9 L444.1,259.4 L407.3,259.4 L407.2,216.9 L406.5,196.4 L450.8,196.8 L471.5,196.6 L477.6,196.5 L477.7,211.0 L477.9,243.2 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39169</fips>
                <name>Wayne</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-169</hc-key>
                <hc-a2>WA</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Morgan')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Morgan County
                <br/>
                {getCountyData('Morgan')?.attributes?.total} cases
                <br/>
                {getCountyData('Morgan')?.attributes?.deaths} death{getCountyData('Morgan')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Morgan County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.115" d="M415.4,434.0 L437.8,435.0 L472.4,436.6 L481.1,436.9 L480.7,454.0 L489.3,454.2 L489.2,469.2 L474.0,468.7 L470.2,469.9 L469.1,480.2 L471.7,480.3 L471.2,490.1 L453.9,487.6 L453.6,496.4 L450.7,496.2 L418.9,494.5 L420.0,476.8 L421.2,476.9 L423.4,442.9 L414.9,442.4 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39115</fips>
                <name>Morgan</name>
                <hc-middle-x>0.49</hc-middle-x>
                <hc-middle-y>0.51</hc-middle-y>
                <hc-key>us-oh-115</hc-key>
                <hc-a2>MO</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Greene')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Greene County
                <br/>
                {getCountyData('Greene')?.attributes?.total} cases
                <br/>
                {getCountyData('Greene')?.attributes?.deaths} death{getCountyData('Greene')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Greene County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.057" d="M108.7,469.4 L112.9,418.8 L118.8,416.6 L135.9,418.2 L135.6,421.1 L152.7,422.5 L152.3,427.4 L165.6,429.3 L165.8,430.8 L179.6,432.6 L179.3,434.9 L178.5,443.5 L177.1,458.8 L175.5,475.9 L147.2,473.3 L129.4,471.5 L126.5,471.2 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39057</fips>
                <name>Greene</name>
                <hc-middle-x>0.50</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-057</hc-key>
                <hc-a2>GR</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Erie')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Erie County
                <br/>
                {getCountyData('Erie')?.attributes?.total} cases
                <br/>
                {getCountyData('Erie')?.attributes?.deaths} death{getCountyData('Erie')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Erie County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.043" d="M375.0,139.7 L328.2,139.1 L301.7,138.4 L300.9,111.1 L285.5,111.0 L285.6,107.1 L289.5,110.6 L303.7,103.2 L309.7,102.2 L313.9,104.8 L321.3,103.7 L328.9,106.5 L326.7,102.7 L334.8,106.4 L345.1,114.8 L351.2,117.9 L360.9,117.2 L374.1,109.4 L374.5,124.5 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39043</fips>
                <name>Erie</name>
                <hc-middle-x>0.44</hc-middle-x>
                <hc-middle-y>0.49</hc-middle-y>
                <hc-key>us-oh-043</hc-key>
                <hc-a2>ER</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Paulding')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Paulding County
                <br/>
                {getCountyData('Paulding')?.attributes?.total} cases
                <br/>
                {getCountyData('Paulding')?.attributes?.deaths} death{getCountyData('Paulding')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Paulding County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.125" d="M71.8,193.8 L36.0,193.1 L12.2,192.5 L12.9,166.8 L13.6,141.3 L64.4,142.4 L64.2,150.9 L81.2,151.4 L81.0,159.9 L80.3,193.9 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39125</fips>
                <name>Paulding</name>
                <hc-middle-x>0.41</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-125</hc-key>
                <hc-a2>PA</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Columbiana')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Columbiana County
                <br/>
                {getCountyData('Columbiana')?.attributes?.total} cases
                <br/>
                {getCountyData('Columbiana')?.attributes?.deaths} death{getCountyData('Columbiana')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Columbiana County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.029" d="M594.8,270.6 L594.8,262.2 L586.3,262.2 L586.2,245.9 L561.0,246.2 L561.0,242.0 L560.6,212.4 L588.7,212.0 L588.6,206.3 L599.6,206.2 L599.6,211.8 L644.3,211.0 L645.5,261.9 L636.0,266.6 L629.7,265.9 L623.7,273.3 L611.9,273.4 L611.9,270.7 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39029</fips>
                <name>Columbiana</name>
                <hc-middle-x>0.57</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-029</hc-key>
                <hc-a2>CO</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Ottawa')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Ottawa County
                <br/>
                {getCountyData('Ottawa')?.attributes?.total} cases
                <br/>
                {getCountyData('Ottawa')?.attributes?.deaths} death{getCountyData('Ottawa')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Ottawa County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.123" d="M218.1,73.8 L254.8,73.3 L255.3,72.4 L264.9,74.0 L276.0,86.9 L287.8,91.3 L295.6,90.4 L303.9,80.7 L310.1,89.0 L321.0,89.2 L322.8,94.2 L312.9,94.6 L304.8,98.4 L298.1,96.8 L284.7,99.5 L281.7,103.5 L269.7,104.8 L279.7,105.6 L229.1,105.3 L229.1,96.8 L218.0,96.9 L218.1,94.0 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39123</fips>
                <name>Ottawa</name>
                <hc-middle-x>0.28</hc-middle-x>
                <hc-middle-y>0.50</hc-middle-y>
                <hc-key>us-oh-123</hc-key>
                <hc-a2>OT</hc-a2>
              </desc>
            </path>
          </Tooltip>

          <Tooltip 
            className={'ohio_map_county'} 
            placement="top"
            title={ 
              getCountyData('Noble')?.attributes?.total ?
              <span className={'ohio_map_county_tooltip'}>
                Noble County
                <br/>
                {getCountyData('Noble')?.attributes?.total} cases
                <br/>
                {getCountyData('Noble')?.attributes?.deaths} death{getCountyData('Noble')?.attributes?.deaths !== 1 ? 's' : null }
              </span> :
              <span className={'ohio_map_county_tooltip'}>
                Noble County
                <br/>
                No data available
              </span>
            }>
            <path className="ohio_map_county" fill="#949494" stroke="#ffffff" strokeWidth="1" id="US.OH.121" d="M541.2,413.9 L529.8,413.7 L529.4,445.3 L535.2,445.3 L535.1,465.0 L535.0,467.7 L518.2,466.0 L515.4,460.4 L506.4,457.5 L506.5,469.7 L489.2,469.2 L489.3,454.2 L480.7,454.0 L481.1,436.9 L472.4,436.6 L472.5,428.1 L472.8,419.6 L489.8,420.1 L490.0,408.7 L507.2,409.1 L507.3,403.5 L518.7,403.8 L518.7,398.1 L541.5,397.6 L541.3,404.5 Z">
              <desc xmlns="http://www.highcharts.com/svg/namespace">
                <fips>39121</fips>
                <name>Noble</name>
                <hc-middle-x>0.54</hc-middle-x>
                <hc-middle-y>0.45</hc-middle-y>
                <hc-key>us-oh-121</hc-key>
                <hc-a2>NO</hc-a2>
              </desc>
            </path>
          </Tooltip>
        </g>

      </svg>
          
    </div>
  );
}

export default OhioMap;