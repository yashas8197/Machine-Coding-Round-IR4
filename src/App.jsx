import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { useState } from "react";

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [waterProof, setWaterProof] = useState(false);
  const [features, setFeatures] = useState([]);
  const [dateOfStorage, setDateOfStorage] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [unitCost, setUnitCost] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [conditionError, setConditionError] = useState(false);

  function isWaterProof() {
    setWaterProof(!waterProof);
  }

  function selectedFeatures(e) {
    const { value, checked } = e.target;
    if (checked) {
      setFeatures((prev) => [...prev, value]);
    } else {
      setFeatures((prev) => prev.filter((feature) => feature != value));
    }
  }

  function formHandler(e) {
    e.preventDefault();
    if (productName && quantity && category && condition && waterProof) {
      setSubmitted(true);
      setConditionError(false);
    } else {
      setConditionError(condition === "");
    }
  }

  return (
    <>
      <Header />
      <div className="bg-dark py-4 text-white">
        <div className="container">
          <form onSubmit={formHandler}>
            <h1 className="text-white py-4">Inventory Form</h1>
            <div>
              <label className="py-2">Product Name: </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div>
              <label className="py-2">Quantity: </label>
              <input
                type="number"
                className="form-control"
                required
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div>
              <label className="py-2">Category: </label>
              <select
                className="form-select"
                required
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Select Category</option>
                <option value="Clothing">Clothing</option>
                <option value="Footware">Footware</option>
                <option value="Equipment">Equipment</option>
              </select>
            </div>
            <div className="py-2">
              <label className="py-2">Condition:</label>
              <br />
              <input
                type="radio"
                id="new"
                className="form-check-input"
                name="condition"
                onChange={(e) => setCondition(e.target.value)}
                value="New"
              />
              <label htmlFor="new" className="form-check-label mx-2">
                New
              </label>
              <input
                type="radio"
                id="used"
                className="form-check-input"
                name="condition"
                onChange={(e) => setCondition(e.target.value)}
                value="Used"
              />
              <label htmlFor="used" className="form-check-label mx-2">
                Used
              </label>
              <br />
              {conditionError && <p>Please Select One option</p>}
              <br />
              <div class="form-check">
                <input
                  id="waterproof"
                  type="checkbox"
                  className="form-check-input"
                  value={waterProof}
                  onChange={isWaterProof}
                />
                <label htmlFor="waterproof" className="form-check-label">
                  Waterproof
                </label>
              </div>
            </div>
            <div>
              <p>Features:</p>

              <div className="d-flex">
                <div class="form-check px-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="Lightweight"
                    id="flexCheckDefault"
                    onChange={selectedFeatures}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Lightweight
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="Durable"
                    id="flexCheckDefault2"
                    onChange={selectedFeatures}
                  />
                  <label class="form-check-label" for="flexCheckDefault2">
                    Durable
                  </label>
                </div>
              </div>

              <div className="py-1">
                <label className="py-2">Date of Storage: </label>
                <input
                  type="date"
                  className="form-control"
                  required
                  onChange={(e) => setDateOfStorage(e.target.value)}
                />
              </div>

              <div className="py-1">
                <label className="py-2">Storage Unit Number: </label>
                <input
                  type="number"
                  className="form-control"
                  required
                  onChange={(e) => setUnitNumber(e.target.value)}
                />
              </div>

              <div className="py-1">
                <label className="py-2">Unit Cost: </label>
                <input
                  type="number"
                  className="form-control"
                  required
                  onChange={(e) => setUnitCost(e.target.value)}
                />
              </div>

              <div className="py-1">
                <label className="py-2">Vendor Name: </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => setVendorName(e.target.value)}
                />
              </div>
            </div>
            <div className="py-1">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>

          {submitted && (
            <div>
              <h1>Submitted Details:</h1>
              <p>Product Name: {productName}</p>
              <p>Quantity: {quantity}</p>
              <p>Category: {category}</p>
              <p>Condition: {condition}</p>
              <p>Waterproof: {waterProof ? "Yes" : "No"}</p>
              <p>
                Features: {features.length === 0 ? "none" : features.join(", ")}
              </p>
              <p>Date of Storage: {dateOfStorage}</p>
              <p>Storage Unit Number: {unitNumber}</p>
              <p>Unit Cost: {unitCost}</p>
              <p>Vendor Name: {vendorName}</p>
              <p>Total Cost: {unitCost * quantity}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
