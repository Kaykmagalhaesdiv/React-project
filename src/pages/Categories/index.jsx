import { useState } from "react";
import CategoryModal from "../../components/modalCategory";
import Modal from "../../components/Modal";
import TableCategory from "../../components/table/tableCategory";
import Header from "../../components/header";

export default function Category() {
  const [modalOpen, setModalOpen] = useState(false)
    return(
      <><Header location = 'Categorias'/>
        <div>
          <Modal isOpen={modalOpen}>
            <CategoryModal onClose={()=>setModalOpen(false)} />
          </Modal>
          <div className="organizationTable">
            <TableCategory />
            <div className="div-btn-table">
              <button
                type="button"
                className="btn-table"
                onClick={() => {
                  setModalOpen(true);
                }}
                >
                ADICIONAR CATEGORIA
              </button>
            </div>
          </div>
        </div>
      </>
  );
}
