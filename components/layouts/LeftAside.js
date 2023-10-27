//1.    Import area

import Link from 'next/link';
import React, { Fragment } from 'react'

//2.   Definition area

 function LeftAside() {
  return (
    <React.Fragment>
        <aside className='col-3 a_tbdr'>
              <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="/flight">The Flight</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/city">The City</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/island">The Island</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-disabled="true" href="/food">The Food</Link>
                  </li>
              </ul>
          </aside>

    </React.Fragment>

  )
}

//3.    Export area

// 3.1   Default Export

export default LeftAside;