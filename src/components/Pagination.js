import React from "react"
import {Link} from "gatsby"


function Pagination({currentPage, numPages}) {
    function checkPage(page) {
        if (page === 0 || page === null || currentPage === page || page > numPages) {
            return "disabled";
        }
    }
    let prevNumber = currentPage - 1
    prevNumber = prevNumber === 1 ? "" : prevNumber

    let links = [
        <li className={checkPage((currentPage - 1))} key="prev"><Link to={"/blog/" + (prevNumber)}>prev</Link></li>
    ];
    for (let index = 2; index <= numPages; index++) {
        let link = <li className={checkPage(index)} key={index}><Link to={"/blog/" + index}>{index}</Link></li>
        links.push(link)
    }
    links.push(<li className={checkPage((currentPage + 1))} key="next"><Link to={"/blog/" + (currentPage + 1)}>next</Link></li>)
    const Allinks = links.map(link => {
        return link
    })
    return (
        <div>
            <ul className="pagination">
                {Allinks}
            </ul>
        </div>
    )

}

export default Pagination