import React from 'react';

/** Componente de Loading, recebe o parametro isLoading, em caso 
 * de isLoading false, o componente não é renderizado */
const Loading = ({ isLoading }) => {
    return (
        isLoading ? <div>
            <h1 className="loading">Carregando ...</h1>
        </div> : null
    )
}

export default Loading;