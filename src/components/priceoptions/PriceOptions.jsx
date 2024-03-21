import PriceOption from "../priceoption.jsx/PriceOption";

    
  

const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to gym facilities",
            "Basic workout equipment",
            "Locker room access"
          ],
          "price": "$29.99/month"
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "features": [
            "Access to gym facilities",
            "Full range of workout equipment",
            "Group fitness classes",
            "Locker room access",
            "Personal trainer consultation (once a month)"
          ],
          "price": "$49.99/month"
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "features": [
            "Access to gym facilities",
            "Full range of workout equipment",
            "Group fitness classes",
            "Locker room access",
            "Personal trainer consultation (twice a month)",
            "Access to sauna and spa facilities",
            "Discounts on merchandise and additional services"
          ],
          "price": "$79.99/month"
        }
      ];
    

    return (
        <div >
            <h2 className="text-5xl">Best Price in the town</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-10 mt-3">
            {
                priceOptions.map((option, indx) => <PriceOption key = {indx} option = {option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;