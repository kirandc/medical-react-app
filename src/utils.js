import _ from 'lodash';

export function pluralize(text) {
  return `${text.toLowerCase()}s`;
}

export function emptyArray(array) {
  if (!array) {
    return true;
  }
  return array.length === 0;
}

export function toQueryString(obj) {
  const parts = [];
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
    }
  }
  return parts.join('&');
}

export function getId(props, new_id = null) {
  if(props.match){
    if(new_id){
      return parseInt(props.match.params[new_id], 10);
    }else{
      return parseInt(props.match.params.id, 10);
    }
  }
}

export function getTitle(props, model) {
  if (getId(props)) {
    return (
      `Edit ${model}`
    );
  }
  return (
    `Add ${model}`
  );
}

export function titleize(str) {
  return str.replace(/_/g, ' ')
    .replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
