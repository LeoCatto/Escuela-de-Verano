import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAlumn } from '../../redux/actions';
import SearchBar from '../Search/Search'
import Card from './Card';

export default function HomeAdmin() {

    const { isAuthenticated } = useAuth0();

    const dispatch = useDispatch()

    const alumno = useSelector((state) => state.alumnos)

    useEffect(() => {
		dispatch(getAlumn());
	}, []);


    const renderData = (alumn) => {

        return (
          <ul>
            {alumn.length>0?
            alumn.map((a) => {
                return (
              <div className='cajitas'>
                  <Card
                  key={a.id}
                  name={a.name}
                  years={a.years}
                  id={a.id}
                />  
              </div>
              );
            })
            : <div>
                <p>No se encuentran alumnos</p>
              </div>
            }
          </ul>
        );
      };



    

    return (
        <>
            <h1>Beinvenido al panel de ADMIN</h1>
            <SearchBar/>
            {renderData}
            
        </>
    )
}
