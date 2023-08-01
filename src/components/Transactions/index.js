import './index.css'

const Transactions = () => (
  <div className="transactions-container">
    <h1 className="transactions">Transactions</h1>
    <div className="row-container">
      <p className="p1">All Transactions</p>
      <p className="p2">Debit</p>
      <p className="p2">Credit</p>
    </div>
    <div className="heading-container">
      <p className="sub-headings">Transaction Name</p>
      <p className="sub-headings">Category</p>
      <p className="sub-headings">Date</p>
      <p className="sub-headings">Amount</p>
    </div>
    <div className="main-container">
      <div className="arrow-container">
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <circle
            cx="15"
            cy="15"
            r="14"
            transform="rotate(180 15 15)"
            stroke="#718EBF"
          />
          <path
            d="M14.4697 20.0303C14.7626 20.3232 15.2374 20.3232 15.5303 20.0303L20.3033 15.2574C20.5962 14.9645 20.5962 14.4896 20.3033 14.1967C20.0104 13.9038 19.5355 13.9038 19.2426 14.1967L15 18.4393L10.7574 14.1967C10.4645 13.9038 9.98959 13.9038 9.6967 14.1967C9.40381 14.4896 9.40381 14.9645 9.6967 15.2574L14.4697 20.0303ZM14.25 9L14.25 19.5L15.75 19.5L15.75 9L14.25 9Z"
            fill="#718EBF"
          />
        </svg>
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <circle
            cx="15"
            cy="15"
            r="14"
            transform="rotate(180 15 15)"
            stroke="#718EBF"
          />
          <path
            d="M14.4697 20.0303C14.7626 20.3232 15.2374 20.3232 15.5303 20.0303L20.3033 15.2574C20.5962 14.9645 20.5962 14.4896 20.3033 14.1967C20.0104 13.9038 19.5355 13.9038 19.2426 14.1967L15 18.4393L10.7574 14.1967C10.4645 13.9038 9.98959 13.9038 9.6967 14.1967C9.40381 14.4896 9.40381 14.9645 9.6967 15.2574L14.4697 20.0303ZM14.25 9L14.25 19.5L15.75 19.5L15.75 9L14.25 9Z"
            fill="#718EBF"
          />
        </svg>
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <circle
            cx="15"
            cy="15"
            r="14"
            transform="rotate(180 15 15)"
            stroke="#718EBF"
          />
          <path
            d="M14.4697 20.0303C14.7626 20.3232 15.2374 20.3232 15.5303 20.0303L20.3033 15.2574C20.5962 14.9645 20.5962 14.4896 20.3033 14.1967C20.0104 13.9038 19.5355 13.9038 19.2426 14.1967L15 18.4393L10.7574 14.1967C10.4645 13.9038 9.98959 13.9038 9.6967 14.1967C9.40381 14.4896 9.40381 14.9645 9.6967 15.2574L14.4697 20.0303ZM14.25 9L14.25 19.5L15.75 19.5L15.75 9L14.25 9Z"
            fill="#718EBF"
          />
        </svg>
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <circle
            cx="15"
            cy="15"
            r="14"
            transform="rotate(180 15 15)"
            stroke="#718EBF"
          />
          <path
            d="M14.4697 20.0303C14.7626 20.3232 15.2374 20.3232 15.5303 20.0303L20.3033 15.2574C20.5962 14.9645 20.5962 14.4896 20.3033 14.1967C20.0104 13.9038 19.5355 13.9038 19.2426 14.1967L15 18.4393L10.7574 14.1967C10.4645 13.9038 9.98959 13.9038 9.6967 14.1967C9.40381 14.4896 9.40381 14.9645 9.6967 15.2574L14.4697 20.0303ZM14.25 9L14.25 19.5L15.75 19.5L15.75 9L14.25 9Z"
            fill="#718EBF"
          />
        </svg>
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <circle
            cx="15"
            cy="15"
            r="14"
            transform="rotate(180 15 15)"
            stroke="#718EBF"
          />
          <path
            d="M14.4697 20.0303C14.7626 20.3232 15.2374 20.3232 15.5303 20.0303L20.3033 15.2574C20.5962 14.9645 20.5962 14.4896 20.3033 14.1967C20.0104 13.9038 19.5355 13.9038 19.2426 14.1967L15 18.4393L10.7574 14.1967C10.4645 13.9038 9.98959 13.9038 9.6967 14.1967C9.40381 14.4896 9.40381 14.9645 9.6967 15.2574L14.4697 20.0303ZM14.25 9L14.25 19.5L15.75 19.5L15.75 9L14.25 9Z"
            fill="#718EBF"
          />
        </svg>
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <circle
            cx="15"
            cy="15"
            r="14"
            transform="rotate(180 15 15)"
            stroke="#718EBF"
          />
          <path
            d="M14.4697 20.0303C14.7626 20.3232 15.2374 20.3232 15.5303 20.0303L20.3033 15.2574C20.5962 14.9645 20.5962 14.4896 20.3033 14.1967C20.0104 13.9038 19.5355 13.9038 19.2426 14.1967L15 18.4393L10.7574 14.1967C10.4645 13.9038 9.98959 13.9038 9.6967 14.1967C9.40381 14.4896 9.40381 14.9645 9.6967 15.2574L14.4697 20.0303ZM14.25 9L14.25 19.5L15.75 19.5L15.75 9L14.25 9Z"
            fill="#718EBF"
          />
        </svg>
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <circle
            cx="15"
            cy="15"
            r="14"
            transform="rotate(180 15 15)"
            stroke="#718EBF"
          />
          <path
            d="M14.4697 20.0303C14.7626 20.3232 15.2374 20.3232 15.5303 20.0303L20.3033 15.2574C20.5962 14.9645 20.5962 14.4896 20.3033 14.1967C20.0104 13.9038 19.5355 13.9038 19.2426 14.1967L15 18.4393L10.7574 14.1967C10.4645 13.9038 9.98959 13.9038 9.6967 14.1967C9.40381 14.4896 9.40381 14.9645 9.6967 15.2574L14.4697 20.0303ZM14.25 9L14.25 19.5L15.75 19.5L15.75 9L14.25 9Z"
            fill="#718EBF"
          />
        </svg>
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <circle
            cx="15"
            cy="15"
            r="14"
            transform="rotate(180 15 15)"
            stroke="#718EBF"
          />
          <path
            d="M14.4697 20.0303C14.7626 20.3232 15.2374 20.3232 15.5303 20.0303L20.3033 15.2574C20.5962 14.9645 20.5962 14.4896 20.3033 14.1967C20.0104 13.9038 19.5355 13.9038 19.2426 14.1967L15 18.4393L10.7574 14.1967C10.4645 13.9038 9.98959 13.9038 9.6967 14.1967C9.40381 14.4896 9.40381 14.9645 9.6967 15.2574L14.4697 20.0303ZM14.25 9L14.25 19.5L15.75 19.5L15.75 9L14.25 9Z"
            fill="#718EBF"
          />
        </svg>
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <circle
            cx="15"
            cy="15"
            r="14"
            transform="rotate(180 15 15)"
            stroke="#718EBF"
          />
          <path
            d="M14.4697 20.0303C14.7626 20.3232 15.2374 20.3232 15.5303 20.0303L20.3033 15.2574C20.5962 14.9645 20.5962 14.4896 20.3033 14.1967C20.0104 13.9038 19.5355 13.9038 19.2426 14.1967L15 18.4393L10.7574 14.1967C10.4645 13.9038 9.98959 13.9038 9.6967 14.1967C9.40381 14.4896 9.40381 14.9645 9.6967 15.2574L14.4697 20.0303ZM14.25 9L14.25 19.5L15.75 19.5L15.75 9L14.25 9Z"
            fill="#718EBF"
          />
        </svg>
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <circle
            cx="15"
            cy="15"
            r="14"
            transform="rotate(180 15 15)"
            stroke="#718EBF"
          />
          <path
            d="M14.4697 20.0303C14.7626 20.3232 15.2374 20.3232 15.5303 20.0303L20.3033 15.2574C20.5962 14.9645 20.5962 14.4896 20.3033 14.1967C20.0104 13.9038 19.5355 13.9038 19.2426 14.1967L15 18.4393L10.7574 14.1967C10.4645 13.9038 9.98959 13.9038 9.6967 14.1967C9.40381 14.4896 9.40381 14.9645 9.6967 15.2574L14.4697 20.0303ZM14.25 9L14.25 19.5L15.75 19.5L15.75 9L14.25 9Z"
            fill="#718EBF"
          />
        </svg>
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <circle
            cx="15"
            cy="15"
            r="14"
            transform="rotate(180 15 15)"
            stroke="#718EBF"
          />
          <path
            d="M14.4697 20.0303C14.7626 20.3232 15.2374 20.3232 15.5303 20.0303L20.3033 15.2574C20.5962 14.9645 20.5962 14.4896 20.3033 14.1967C20.0104 13.9038 19.5355 13.9038 19.2426 14.1967L15 18.4393L10.7574 14.1967C10.4645 13.9038 9.98959 13.9038 9.6967 14.1967C9.40381 14.4896 9.40381 14.9645 9.6967 15.2574L14.4697 20.0303ZM14.25 9L14.25 19.5L15.75 19.5L15.75 9L14.25 9Z"
            fill="#718EBF"
          />
        </svg>
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <circle
            cx="15"
            cy="15"
            r="14"
            transform="rotate(180 15 15)"
            stroke="#718EBF"
          />
          <path
            d="M14.4697 20.0303C14.7626 20.3232 15.2374 20.3232 15.5303 20.0303L20.3033 15.2574C20.5962 14.9645 20.5962 14.4896 20.3033 14.1967C20.0104 13.9038 19.5355 13.9038 19.2426 14.1967L15 18.4393L10.7574 14.1967C10.4645 13.9038 9.98959 13.9038 9.6967 14.1967C9.40381 14.4896 9.40381 14.9645 9.6967 15.2574L14.4697 20.0303ZM14.25 9L14.25 19.5L15.75 19.5L15.75 9L14.25 9Z"
            fill="#718EBF"
          />
        </svg>
      </div>
      <div className="names-container">
        <p className="names">Spotify Subscription</p>
        <p className="names1">Freepik Sales</p>
        <p className="names2">Mobile Service</p>
        <p className="names3">Wilson</p>
        <p className="names4">Figma</p>
        <p className="names5">Prasanth</p>
        <p className="names6">Prem</p>
        <p className="names7">Manasa</p>
        <p className="names8">Preethi</p>
        <p className="names9">Ishan</p>
        <p className="names10">Ishan</p>
        <p className="names11">Ishan</p>
      </div>

      <div className="category-container">
        <p className="category1">Shopping</p>
        <p className="category2">Transfer</p>
        <p className="category3">Service</p>
        <p className="category4">Transfer</p>
        <p className="category5">Transfer</p>
        <p className="category6">Transfer</p>
        <p className="category7">Transfer</p>
        <p className="category8">Transfer</p>
        <p className="category9">Transfer</p>
        <p className="category10">Transfer</p>
        <p className="category11">Transfer</p>
      </div>

      <div className="date-container">
        <p className="date1">28 Jan, 12.30 AM</p>
        <p className="date2">28 Jan, 12.30 AM</p>
        <p className="date3">28 Jan, 12.30 AM</p>
        <p className="date4">28 Jan, 12.30 AM</p>
        <p className="date5">28 Jan, 12.30 AM</p>
        <p className="date6">28 Jan, 12.30 AM</p>
        <p className="date7">28 Jan, 12.30 AM</p>
        <p className="date8">28 Jan, 12.30 AM</p>
        <p className="date9">28 Jan, 12.30 AM</p>
        <p className="date10">28 Jan, 12.30 AM</p>
        <p className="date11">28 Jan, 12.30 AM</p>
      </div>

      <div className="amount-container">
        <p className="amount1">-$2,500</p>
        <p className="amount2">-$2,500</p>
        <p className="amount3">-$2,500</p>
        <p className="amount4">-$2,500</p>
        <p className="amount5">-$2,500</p>
        <p className="amount6">-$2,500</p>
        <p className="amount7">-$2,500</p>
        <p className="amount8">-$2,500</p>
        <p className="amount9">-$2,500</p>
        <p className="amount10">-$2,500</p>
        <p className="amount11">-$2,500</p>
      </div>
    </div>
  </div>
)
export default Transactions
