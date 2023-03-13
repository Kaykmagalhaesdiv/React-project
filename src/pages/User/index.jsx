import { useState } from "react";
import FormModalUser from "../../components/modalUser";
import TotalSection from "../../components/section";
import MainSearch from "../../components/main";

import Modal from "../../components/Modal";
import TableUser from "../../components/table/tableUser";
import Header from "../../components/header";


export default function Users(){
    const [modalOpen, setModalOpen] = useState(false)
    return(
      <><Header location = 'Despesas do usuario'/>
        <div>
          <TotalSection />
          <Modal isOpen={modalOpen}>
            <FormModalUser onClose={()=>setModalOpen(false)} />
          </Modal>
          <div className="organizationTable">
            <MainSearch />
            <TableUser />
            <div className="div-btn-table">
              <button
                type="button"
                className="btn-table"
                onClick={() => {
                  setModalOpen(true);
                }}
                >
                ADICIONAR DESPESA
              </button>
            </div>
          </div>
        </div>
    </>
  );
}