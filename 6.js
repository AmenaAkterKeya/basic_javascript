const chcek_length = (array) => {
  let bi_friends = array[0];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.length > bi_friends.length) {
      bi_friends = element;
    }
  }
  return bi_friends;
};

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const output = chcek_length(friends);
console.log(output);
