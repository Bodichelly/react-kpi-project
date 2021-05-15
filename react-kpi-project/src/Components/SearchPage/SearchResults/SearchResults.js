import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/redux/actions";
import SearchBar from "../SearchBar/SearchBar";
import {
  SEARCH_PRIVATE_NOTATY,
  SEARCH_STATE_NOTARY_DEPARTMENT,
  SEARCH_BY_ADDRESS,
} from "src/redux/types";

const SearchItemDepartment = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <img
            style={{ width: 30 + "px", height: 30 + "px" }}
            src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Business-Department-icon.png"
          />
          <span class="fw-bold">Відомості про заклад: </span>{props.name}
        </div>
        <div className="card-text">Контактні дані: {props.information}</div>
      </div>
    </div>
  );
};

const SearchItemNotary = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <img
            style={{ width: 30 + "px", height: 30 + "px" }}
            src="https://icon-library.com/images/department-icon/department-icon-0.jpg"
          />
          <span class="fw-bold">Відомості про нотаріус: </span>{props.lastName} {props.firstName} {props.middleName}
        </div>
        <div className="card-text">Номер свідоцтва: {props.certificateNumber}, Телефонний номер: {props.phoneNumbers}</div>
      </div>
    </div>
  );
};

const SearchResults = () => {
  const dispatch = useDispatch();
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const items = useSelector((state) => state.search.data);
  const departmentTypes = useSelector((state) => state.search.departmentTypes);
  const searchBarType = useSelector((state) => state.search.searchType);

  const checkDepartmentType = (type) => {
    const index = departmentTypes.indexOf(type);
    if (index !== -1) {
      dispatch(
        actions.changeNotaryType(
          departmentTypes.filter((depType) => depType !== type)
        )
      );
      return;
    }
    dispatch(actions.changeNotaryType([...departmentTypes, type]));
  };

  const getPageNumber = () => {
    if (!items || !items.length) {
      return 0;
    }
    if (items.length / itemsPerPage && items.length % itemsPerPage != 0) {
      return Math.floor(items.length / itemsPerPage) + 1;
    }
    if (items.length / itemsPerPage && items.length % itemsPerPage == 0) {
      return items.length / itemsPerPage;
    }
  };

  const nextPage = () => {
    if (items && getPageNumber() > currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (1 < currentPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getItemsHtml = () => {
    if(items && items.length){
      return items.slice(currentPage-1, itemsPerPage).map((item) => {
        if(!!item.name){
          return <SearchItemDepartment {...item}></SearchItemDepartment>;
        }else{
          return <SearchItemNotary {...item}></SearchItemNotary>;
        }
    });
    }else{
      return <h4>Інформацію не знайдено</h4>
    }
    
  };

  return (
    <div className="card bg-warning">
      <div className="card-body bg-light m-1">
        <h3>Результати пошуку</h3>
        { searchBarType===SEARCH_BY_ADDRESS ?<div className="container-fluid">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked={departmentTypes.includes(SEARCH_STATE_NOTARY_DEPARTMENT)}
              onClick={() =>
                checkDepartmentType(SEARCH_STATE_NOTARY_DEPARTMENT)
              }
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Державні нотаріальні контори
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked={departmentTypes.includes(SEARCH_PRIVATE_NOTATY)}
              onClick={() => checkDepartmentType(SEARCH_PRIVATE_NOTATY)}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Приватні нотаріуси
            </label>
          </div>
        </div> : null}
        <hr className="dropdown-divider mb-3 mt-3" />
        <div
          className="container-fluid overflow-auto"
          style={{ height: 450 + "px" }}
        >
          {getItemsHtml()}
        </div>
        <hr className="dropdown-divider mb-3 mt-3" />
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => {
                prevPage();
              }}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <span className="page-link" href="#">
              {currentPage}
            </span>
          </li>
          <li className="page-item">
            <span className="page-link" href="#">
              /
            </span>
          </li>
          <li className="page-item">
            <span className="page-link" href="#">
              {getPageNumber()}
            </span>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => {
                nextPage();
              }}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchResults;
