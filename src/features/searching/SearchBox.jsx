import { useState } from 'react';
import Input from '../../ui/Input';

function SearchBox() {
  const [query, setQuery] = useState('');

  return (
    <div className="transition-all duration-1000 ">
      <form method="post" action={`/szukaj/${query}`}>
        <Input placeholder="Szukaj..." onChange={setQuery} value={query} />
      </form>
    </div>
  );
}

export default SearchBox;
