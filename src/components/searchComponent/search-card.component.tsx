// import { Component } from "react";
import { ChangeEvent } from "react";
import "./search-card.styles.css"

// migrating to typescript

type SearchBoxProps = {
  className: string;
  placeholder: string;
  InputType: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchCard = ({ InputType, onChangeHandler, placeholder, className }: SearchBoxProps ) => {
  // const { InputType, onChangeHandler, placeholder, className } = props;

  return (
    <input
      className={`search-box ${className}`}
      type={InputType}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchCard;

// class components

// class SearchCard extends Component {

//     render() {

//         const { SearchInput, onChangeHandler, placeholder, className } = this.props;
//         return (
//           <div>
//             <input
//               className={`search-box ${className}`}
//               type={SearchInput}
//               placeholder={placeholder}
//               onChange={onChangeHandler}
//             />
//           </div>
//         );
//     }
// }
