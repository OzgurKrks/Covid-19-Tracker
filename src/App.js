import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FetchData, setC, FetchData1 } from './redux/Slice'
import Card from './comps/Card'
import Chart from './comps/Chart'




function App() {


  const dispatch = useDispatch()
  const [name, setName] = useState()
  const [confirmed, setConfirmed] = useState()
  const [deaths, setDeaths] = useState()
  const [recovered, setRecovered] = useState()


  const countriesName = useSelector((state) => state.ozgur.countriesName)
  const covidData = useSelector((state) => state.ozgur.covidData)
  const xd = useSelector((state) => state.ozgur.xd)

  useEffect(() => {
    dispatch(FetchData())
    dispatch(FetchData1(name))
    dispatch(setC(covidData))



  }, [dispatch, name, setC, FetchData, FetchData1, covidData])


  //console.log(xd)
  const handler = (e) => {
    setName(e.target.value)
    setConfirmed(xd.confirmed.value)
    setDeaths(xd.deaths.value)
    setRecovered(xd.confirmed.value - xd.deaths.value)
    e.preventDefault()

  }


  return (
    <div>
      <Card confirmed={confirmed}
        deaths={deaths}
        recovered={recovered} />
        <div className='container d-flex justify-content-center'>
        <select  onChange={handler}>
        
        
        {countriesName.map((m,i)=>(
          <option  key={i}>{m.name}</option>
        ))}
      </select>
        </div>
        <Chart
        confirmed={confirmed}
        deaths={deaths}
        recovered={recovered}/>
    
      
         











    </div>
  )
}

export default App
/*
   <select value={name1} onChange={(e)=>{setName1(e.target.value)}}>
      {cdata ? cdata.map((m,k)=>(
        <option key={k}>{m.name}</option>
      )):null}
     </select>
     {x ? <h1>{x.confirmed.value}</h1>:<h1>zort</h1>} 
     */
/*
 {x ? <h1>{x.confirmed.value}</h1>:<h1>zort</h1>} 
*/