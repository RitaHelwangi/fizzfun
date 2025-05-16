import React, { useEffect, useState } from "react";
import useToyStore from "../data/toyStore";
import ProductForm from "../components/ProductForm";
import ConfirmModal from "../components/ConfirmModal";
import "../styles/Admin.css";

const Admin = () => {
  const {
    toys,
    fetchToys,
    addToy,
    updateToyInStore,
    deleteToyFromStore,
    loading,
    error,
  } = useToyStore();

  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchToys();
  }, [fetchToys]);

  const handleAdd = async (product) => {
    await addToy(product);
    setShowForm(false);
  };

  const handleEdit = async (product) => {
    await updateToyInStore(product.id, product);
    setEditing(null);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    await deleteToyFromStore(deleteId);
    setModalOpen(false);
    setDeleteId(null);
  };

  return (
    <div className="admin-page">
      <h2>Admin Product Management</h2>
      <ConfirmModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmDelete}
        message="Are you sure you want to delete this product?"
      />
      {showForm && (
        <ProductForm
          onSubmit={handleAdd}
          onCancel={() => setShowForm(false)}
        />
      )}
      {editing && (
        <ProductForm
          initialProduct={editing}
          onSubmit={handleEdit}
          onCancel={() => setEditing(null)}
        />
      )}
      {!showForm && !editing && (
        <button className="add-btn" onClick={() => setShowForm(true)}>
          Add Product
        </button>
      )}
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="admin-products">
        {toys.map((product) => (
          <div className="admin-product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>
              <h4>{product.name}</h4>
              <p>{product.description}</p>

              <p>
                <b>Price:</b> {product.price} SEK
              </p>
            </div>
            <div className="admin-actions">
              <button onClick={() => setEditing(product)}>Edit</button>
              <button onClick={() => handleDeleteClick(product.id)} className="delete-btn">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;