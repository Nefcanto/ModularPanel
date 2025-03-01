const PersonNameTd = ({ person }) =>
    <td>
        {person?.naturalPersonName || person?.juridicalPersonName || "Anonymous"}
    </td>

export default PersonNameTd
