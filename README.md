# react-pager-component
Simple component for navigating through a large volume of pages

### Usage:

import Pager from "Pager.tsx"

```
<Pager beginIndex={1} endIndex={45} width={10} firstAndLast={true} onChange={this.doSomething}/>
```

Your onChange function will take exactly one argument, the new page/index that was selected:

```
onChange = (page: number) => {
 console.log("We are now on page " + page);
}

### LICENSE

Copyright (C) 2020, Marc Bejerano

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

