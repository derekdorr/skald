import { UNDEF } from 'permanent';

const _call = (fn, arr) => fn.apply(UNDEF, arr);

export default _call;
