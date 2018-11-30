class TradeSerializer < ActiveModel::Serializer
  attributes :id, :amount, :price, :type
end
