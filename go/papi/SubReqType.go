// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package papi

import "strconv"

type SubReqType int8

const (
	SubReqTypeSubscribe   SubReqType = 1
	SubReqTypeUnsubscribe SubReqType = 2
)

var EnumNamesSubReqType = map[SubReqType]string{
	SubReqTypeSubscribe:   "Subscribe",
	SubReqTypeUnsubscribe: "Unsubscribe",
}

var EnumValuesSubReqType = map[string]SubReqType{
	"Subscribe":   SubReqTypeSubscribe,
	"Unsubscribe": SubReqTypeUnsubscribe,
}

func (v SubReqType) String() string {
	if s, ok := EnumNamesSubReqType[v]; ok {
		return s
	}
	return "SubReqType(" + strconv.FormatInt(int64(v), 10) + ")"
}