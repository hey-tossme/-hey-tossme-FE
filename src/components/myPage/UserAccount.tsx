import React, { useState } from "react";
import { GetUserAccount } from "./MyPage.interface";
import { BsCreditCardFill, BsFillCaretDownFill } from "react-icons/bs";

export default function UserAccount({ getUserAccountInfo, bank, account }: GetUserAccount) {
    const [userAccount, setUserAccount] = useState<boolean>(!getUserAccountInfo);
    const [userBankName, setUserBankName] = useState<string>("");
    const [showList, setShowList] = useState<boolean>(false);

    const bankList = [
        { id: 0, name: "KEB하나은행" },
        { id: 1, name: "SC제일은행" },
        { id: 2, name: "국민은행" },
        { id: 3, name: "신한은행" },
        { id: 4, name: "외환은행" },
        { id: 5, name: "우리은행" },
        { id: 6, name: "한국시티은행" },
        { id: 7, name: "경남은행" },
        { id: 8, name: "광주은행" },
        { id: 9, name: "대구은행" },
        { id: 10, name: "부산은행" },
        { id: 11, name: "전북은행" },
        { id: 12, name: "제주은행" },
        { id: 13, name: "기업은행" },
        { id: 14, name: "농협" },
        { id: 15, name: "수협" },
        { id: 16, name: "한국산업은행" },
        { id: 17, name: "한국수출입은행" },
        { id: 18, name: "카카오뱅크" },
        { id: 19, name: "토스뱅크" },
    ];

    const selectBankList = (item: string) => {
        setShowList(false);
        setUserBankName(item);
    };

    return (
        <div className="user-account-check-container">
            {userAccount ? (
                <>
                    <div className="user-account-check">
                        <BsCreditCardFill className="user-account-check-icon" /> 판매자 등록 완료
                    </div>
                    <div className="user-account">
                        등록된 계좌번호는
                        <div className="text-bold">
                            {bank} {account}
                        </div>
                        입니다.
                    </div>
                </>
            ) : (
                <>
                    <div className="flex">
                        <div className="input-box">
                            <div className="bank-list-select-box" onClick={() => setShowList(true)}>
                                <input
                                    className="bank-list-select"
                                    type="text"
                                    placeholder="은행 선택"
                                    value={userBankName}
                                    readOnly={true}
                                />
                                <BsFillCaretDownFill className="bank-list-select-icon" />
                            </div>
                            {showList ? (
                                <div className="bank-list-select-option-wrapper">
                                    {bankList.map((item) => (
                                        <div
                                            className="bank-list-select-option"
                                            key={item.id}
                                            onClick={() => selectBankList(item.name)}
                                        >
                                            {item.name}
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                            <input
                                type="text"
                                className="account-form"
                                placeholder="계좌번호를 입력해 주세요."
                            />
                        </div>
                        <button className="account-submit-btn">등록</button>
                    </div>
                </>
            )}
        </div>
    );
}
