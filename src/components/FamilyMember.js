// eslint-disable
import React from "react";
import { useTranslation } from "react-i18next";

// Recursive component to render family members
const FamilyMember = ({ member }) => {
  const { t } = useTranslation();
  return (
    <>
      <ul>
        <li>
          <span>
            {`${member.isDeceased ? "स्व:" : ""}`} {t(member.name)}
            {member.spouse && `------${member.spouse}`}
          </span>
         
          {member.children && member.children.length > 0 && (
            <ul>
              {member.children.map((child, index) => (
                <li key={index}>
                  <FamilyMember key={index} member={child} />
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </>
  );
};

export default FamilyMember;
