import { useParams, Link } from "react-router-dom";
import { userContextId } from "../context/userId-context";
import { useContext, useEffect } from "react";
import { getTotalExpenseByStatus } from "../services/expense.service";
import Table from "./table";

function TableUser() {
    let {id} = useParams()
    const {user, setUser, FetchFindUser} = useContext(userContextId);
    let userMapp = []
    for(let i = 0; i < user.length; i ++) {
      user.map((user) => {
      return userMapp = [{...user, pago:getTotalExpenseByStatus(user._expenses, 'PAGO'), pendente: getTotalExpenseByStatus(user._expenses, 'PENDENTE'), categoryID: user._categories[i].id, categoryName:user._categories[i].name}]
      })
    }

    useEffect(() => {
      FetchFindUser(id)
    }, [])
    
    return (
      <Table data={userMapp} fields={[{
        label: 'Id',
        key:'categoryID'
      },
      {
        label: 'Categoria',
        key:'categoryName'
      },
      {
        label:'Pago',
        key:'pago'
      },
      {
        label:'Pendente',
        key:'pendente'
      }]}/>
    );
}

export default TableUser;
